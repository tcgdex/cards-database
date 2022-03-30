import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Reshiram",
		fr: "Reshiram",
		es: "Reshiram",
		it: "Reshiram",
		pt: "Reshiram",
		de: "Reshiram"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		643,
	],
	hp: 130,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Turboblaze",
				fr: "TurboBrasier",
				es: "Turbollama",
				it: "Piroturbina",
				pt: "Turbochama",
				de: "Turbobrand"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may attach a Fire Energy card from your hand to 1 of your Dragon Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez attacher une carte Énergie Fire de votre main à l'un de vos Pokémon Dragon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes unir 1 carta de Energía Fire de tu mano a 1 de tus Pokémon Dragon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi assegnare una carta Energia Fire che hai in mano a uno dei tuoi Pokémon Dragon.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon for seu Pokémon Ativo, você poderá ligar um card de Energia Fire da sua mão a 1 dos seus Pokémon Dragon.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon dein Aktives Pokémon ist, 1 Fire-Energiekarte von deiner Hand an 1 deiner Dragon-Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bright Wing",
				fr: "Ailes Lumineuses",
				es: "Ala Brillante",
				it: "Ala di Luce",
				pt: "Asa Brilhante",
				de: "Strahlenschwinge"
			},
			effect: {
				en: "Discard a Fire Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
				es: "Descarta 1 Energía Fire unida a este Pokémon.",
				it: "Scarta un'Energia Fire assegnata a questo Pokémon.",
				pt: "Descarte uma Energia Fire ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
