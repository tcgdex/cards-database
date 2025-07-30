import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		de: "Magnezone"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Super Connectivity",
				fr: "Super connection",
				de: "Superleitende Verbindung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Lightning or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Magnezone is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie Lightning ou Metal et l'attacher à votre Pokémon Actif. Ensuite, placez 1 marqueur de dégât sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Ablagestapel nach 1 - oder -Energiekarte durchsuchen und sie an dein Aktives Pokémon anlegen. Danach lege 1 Schadensmarke auf dieses Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Magnezone von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe",
				de: "Gyroball"
			},
			effect: {
				en: "You may switch Magnezone with 1 of your Benched Pokémon. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez échanger Magnézone avec 1 des Pokémon de votre Banc. Votre adversaire échange alors le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Du kannst Magnezone gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, tauscht dein Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278303,
		tcgplayer: 87115
	}
}

export default card
