import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [858],
	set: Set,

	name: {
		'en-us': "Hatterene VMAX",
		'fr-fr': "Sorcilence VMAX",
		'es-es': "Hatterene VMAX",
		'it-it': "Hatterene VMAX",
		'pt-br': "Hatterene VMAX",
		'de-de': "Silembrim VMAX"
	},

	illustrator: "sui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Hatterene V",
		'fr-fr': "Sorcilence-V",
		'es-es': "Hatterene V",
		'it-it': "Hatterene-V",
		'pt-br': "Hatterene V",
		'de-de': "Silembrim-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Witch's Domain",
			'fr-fr': "Domaine de la Sorcière",
			'es-es': "Dominio de la Hechicera",
			'it-it': "Dominio della Strega",
			'pt-br': "Domínio da Bruxa",
			'de-de': "Hexenreich"
		},

		effect: {
			'en-us': "Once during your turn, you may move up to 2 damage counters from your Pokémon to your opponent's Active Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez déplacer jusqu'à 2 marqueurs de dégâts de vos Pokémon vers le Pokémon Actif de votre adversaire.",
			'es-es': "Una vez durante tu turno, puedes mover hasta 2 contadores de daño de tus Pokémon al Pokémon Activo de tu rival.",
			'it-it': "Una sola volta durante il tuo turno, puoi spostare fino a due segnalini danno dai tuoi Pokémon al Pokémon attivo del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, você poderá mover até 2 contadores de dano dos seus Pokémon para o Pokémon Ativo do seu oponente.",
			'de-de': "Einmal während deines Zuges kannst du bis zu 2 Schadensmarken von deinen Pokémon auf das Aktive Pokémon deines Gegners verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "G-Max Smite",
			'fr-fr': "Sentence G-Max",
			'es-es': "Gigacastigo",
			'it-it': "Gigacastigo",
			'pt-br': "Castigo G-Max",
			'de-de': "Giga-Sanktion"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691927,
				tcgplayer: 478074
			}
		},
	],
}

export default card
