import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Magearna",
		fr: "Magearna",
		es: "Magearna",
		it: "Magearna",
		pt: "Magearna",
		de: "Magearna"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		801,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Change Clothes",
				fr: "Changement de Tenue",
				es: "Cambio de Ropa",
				it: "Cambio d’Abito",
				pt: "Trocar de Roupa",
				de: "Kleiderwechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l’un de vos Pokémon dans votre main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 1 carta de Herramienta Pokémon unida a 1 de tus Pokémon en tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi aggiungere alle carte che hai in mano una carta Oggetto Pokémon assegnata a uno dei tuoi Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar na sua mão 1 carta de Ferramenta Pokémon ligada a 1 dos seus Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Pokémon-Ausrüstung, die an 1 deiner Pokémon angelegt ist, auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
				fr: "Attaque Qui Roule",
				es: "Ataque Giro",
				it: "Attacco Rotolante",
				pt: "Golpe Rolador",
				de: "Rollender Angriff"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 316017,
		tcgplayer: 157708
	}
}

export default card
