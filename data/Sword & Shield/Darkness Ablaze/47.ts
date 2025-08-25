import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [584],

	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
		es: "Vanilluxe",
		it: "Vanilluxe",
		pt: "Vanilluxe",
		de: "Gelatwino"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bitter Cold",
				fr: "Froid Mordant",
				es: "Frío Intenso",
				it: "Freddo Pungente",
				pt: "Frio de Doer",
				de: "Bitterkalt"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá jogar 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Münze werfen. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Frost Smash",
				fr: "Impact Glacial",
				es: "Golpe Gélido",
				it: "Gelocolpo",
				pt: "Pancada Congelada",
				de: "Frostschlag"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "When its anger reaches a breaking point, this Pokémon unleashes a fierce blizzard that freezes every creature around it, be they friend or foe."
	},

	thirdParty: {
		cardmarket: 483114,
		tcgplayer: 219351
	}
}

export default card
