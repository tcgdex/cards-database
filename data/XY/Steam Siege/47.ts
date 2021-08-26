import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eerie Wave",
				fr: "Vague Étrange",
				es: "Onda Sobrecogedora",
				it: "Ondamistero",
				pt: "Onda Misteriosa",
				de: "Gespenstische Woge"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Burst Curse",
				fr: "Malédiction en Rafale",
				es: "Maldición Explosiva",
				it: "Maledizione Esplosiva",
				pt: "Maldição Explosiva",
				de: "Geplatzter Fluch"
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon. Put 8 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon. Placez 8 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Descarta 2 Energías unidas a este Pokémon. Pon 8 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Scarta due Energie assegnate a questo Pokémon. Distribuisci a piacimento otto segnalini danno sui Pokémon del tuo avversario.",
				pt: "Descarte 2 Energias ligadas a este Pokémon. Coloque 8 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				de: "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel. Verteile 8 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
