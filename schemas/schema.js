// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import districts from './districts';
import name from './name';
import address from './address';
import phone from './phone';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'doctor',
      type: 'document',
      title: 'Doctor',
      fields: [
        districts,
        name,
        phone,
        address,
        {
          name: 'timing',
          type: 'string',
          title: 'Timing(e.g. 10.00a.m - 12.00p.m)',
        },
      ],
    },
    {
      name: 'oxygen',
      type: 'document',
      title: 'Oxygen Suppliers',
      fields: [districts, name, phone, address],
    },
    {
      name: 'ambulance-hospitals',
      type: 'document',
      title: 'Ambulance and Hospital Suppliers',
      fields: [
        {
          name: 'ambulanceHospital',
          type: 'string',
          title: 'Oxygen or Ambulance',
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              {
                title: 'Ambulance',
                value: 'Ambulance',
              },
              {
                title: 'Hospital',
                value: 'Hospital',
              },
            ],
          },
        },
        districts,
        name,
        phone,
        address,
      ],
    },
    {
      name: 'ngos',
      type: 'document',
      title: 'NGO and Volunteers',
      fields: [
        {
          name: 'ngovolunteer',
          type: 'string',
          title: 'NGO or Volunteer',
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              {
                title: 'NGO',
                value: 'NGO',
              },
              {
                title: 'Volunteer',
                value: 'Volunteer',
              },
            ],
          },
        },
        districts,
        name,
        phone,
        address,
        {
          name: 'organization',
          type: 'string',
          title: 'Organization',
        },
        {
          name: 'timing',
          type: 'string',
          title: 'Timing(e.g. 10.00a.m - 12.00p.m)',
        },
      ],
    },
    {
      name: 'bloodPlasma',
      type: 'document',
      title: 'Blood and Plasma Details',
      fields: [
        districts,
        name,
        phone,
        address,
        {
          name: 'organization',
          type: 'string',
          title: 'Organization',
        },
      ],
    },
    {
      name: 'other',
      type: 'document',
      title: 'Other Resources',
      fields: [
        {
          name: 'details',
          type: 'text',
          title: 'Details',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL(if any)',
        },
        {
          name: 'file',
          type: 'file',
          title: 'File(Other than Images)',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
      ],
    },
  ]),
});
