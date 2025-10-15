import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Alakazam",
		fr: "Alakazam",
		de: "Simsala"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kadabra",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psymimic",
				fr: "Psymitation",
				de: "Psymimikry"
			},
			effect: {
				en: "Once during your turn, instead of Alakazam's normal attack, you may choose 1 of your opponent's Pokémon's attack. Alakazam copies that attack including its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type that Pokémon is, Alakazam's type is still Psychic.) This power can't be used if Alakazam is affected by a Special Condition.",
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
				en: "Syncroblast",
				fr: "Syncroblast",
				de: "Synchronexplosion"
			},

			effect: {
				en: "If Alakazam and the Defending Pokémon don't have the same number of Energy cards on them, this attack's base damage is 20 instead of 80.",
				fr: "Si Alakazam et le Pokémon Défenseur n'ont pas le même nombre de cartes Énergie attachées à eux, cette attaque inflige 20 dégâts de base au lieu de 80.",
				de: "Wenn an Simsala und das Verteidigende Pokémon nicht dieselbe Anzahl von Energiekarten angelegt ist, ist der Basisschaden dieses Angriffs 20 anstatt 80."
			},

			damage: 80
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274876,
		tcgplayer: 83500
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
