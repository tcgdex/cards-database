import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Delphox",
		fr: "Goupelin",
		es: "Delphox",
		it: "Delphox",
		pt: "Delphox",
		de: "Fennexis"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mystical Torch",
				fr: "Torche Mystique",
				es: "Antorcha Embrujada",
				it: "Magitorcia",
				pt: "Tocha Mística",
				de: "Mystische Fackel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may leave your opponent’s Active Pokémon Burned.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes dejar al Pokémon Activo de tu rival Quemado.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lasciare il Pokémon attivo del tuo avversario bruciato.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode deixar o Pokémon Ativo do seu oponente Queimado.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du das Aktive Pokémon deines Gegners verbrennen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danse Flamme",
				es: "Giro Fuego",
				it: "Turbofuoco",
				pt: "Chama Furacão",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355537
	}
}

export default card
