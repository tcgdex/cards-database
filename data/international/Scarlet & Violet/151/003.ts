import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		'fr-fr': "Florizarre-ex",
		'en-us': "Venusaur ex",
		'es-es': "Venusaur ex",
		'it-it': "Venusaur-ex",
		'pt-br': "Venusaur ex",
		'de-de': "Bisaflor-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Herbizarre",
		'en-us': "Ivysaur",
		'es-es': "Ivysaur",
		'it-it': "Ivysaur",
		'pt-br': "Ivysaur",
		'de-de': "Bisaknosp"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Fleur Paisible",
			'en-us': "Tranquil Flower",
			'es-es': "Flor Silente",
			'it-it': "Calmafiore",
			'pt-br': "Flor Serena",
			'de-de': "Ruhige Blume"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez soigner 60 dégâts de l'un de vos Pokémon.",
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may heal 60 damage from 1 of your Pokémon.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes curar 60 puntos de daño a uno de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi curare uno dei tuoi Pokémon da 60 danni.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá curar 60 pontos de dano de 1 dos seus Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 60 Schadenspunkte bei 1 deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Fouet Vénéneux",
			'en-us': "Dangerous Toxwhip",
			'es-es': "Toxilatigazo Peligroso",
			'it-it': "Tossifrusta Pericolosa",
			'pt-br': "Chicotóxico Perigoso",
			'de-de': "Gefährliche Giftranke"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733598,
				tcgplayer: 502554,
				cardtrader: 261103
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
