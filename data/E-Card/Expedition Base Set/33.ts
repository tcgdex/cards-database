import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Alakazam",
		de: "Simsala"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [80],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Kadabra",
		fr: "Kadabra"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dense Body",
				fr: "Psymitation",
				de: "Psymimikry"
			},
			effect: {
				en: "Any damage done to Slowbro by attacks from Basic Pokémon (excluding Baby Pokémon) is reduced by 20.",
				fr: "Une seule fois pendant votre tour, à la place de l'attaque normale d'Alakazam, vous pouvez choisir une attaque d'un des Pokémon de votre adversaire. Alakazam copie cette attaque, y compris son coût d'Énergie et toute autre action requise pour utiliser cette attaque, comme par exemple, se défausser de cartes Énergie. (Quel que soit le type de l'autre Pokémon, Alakazam est toujours de type Psy.) Ce pouvoir ne peut pas être utilisé si Alakazam est affecté par un État spécial.",
				de: "Einmal während deines Zuges kannst duanstatt Simsalas normalen Angriff 1 der Angriffen der Pokémon deines Gegners wählen. Simsala kopiert diesen Angriff (einschließlich der Energiekosten und allem anderen, was du tun musst, um diesen Angriff zu verwenden).(Unabhängig vom Typ dieses Pokémon bleibt Simsalas Typ Psycho.) Diese Fähigkeit kann nicht verwendet werden, falls Simsala von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Energy Cannon",
				fr: "Syncroblast",
				de: "Synchronexplosion"
			},

			effect: {
				en: "This attack does 30 damage plus 10 damage for each Energy attached to Slowbro but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Si Alakazam et le Pokémon Défenseur n'ont pas le même nombre de cartes Énergie attachées à eux, cette attaque inflige 20 dégâts de base au lieu de 80.",
				de: "Wenn an Simsala und das Verteidigende Pokémon nicht dieselbe Anzahl von Energiekarten angelegt ist, ist der Basisschaden dieses Angriffs 20 anstatt 80."
			},

			damage: "30+",
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83500,
				cardmarket: 274876
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
