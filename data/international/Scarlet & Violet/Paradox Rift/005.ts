import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [512],
	set: Set,

	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'es-es': "Simisage",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'de-de': "Vegichita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'es-es': "Pansage",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'de-de': "Vegimak"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Monkey Trio",
			'fr-fr': "Trio Simiesque",
			'es-es': "Trío de Monos",
			'it-it': "Trio delle Scimmie",
			'pt-br': "Trio Primata",
			'de-de': "Affentrio"
		},

		effect: {
			'en-us': "If you have Simisage, Simisear, and Simipour in play, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			'fr-fr': "Si vous avez Feuiloutan, Flamoutan et Flotoutan en jeu, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon.",
			'es-es': "Si tienes a Simisage, Simisear y Simipour en juego, ignora todas las Energías {C} en los costes de los ataques usados por este Pokémon.",
			'it-it': "Se hai in gioco Simisage, Simisear e Simipour, ignora tutte le Energie {C} necessarie per gli attacchi usati da questo Pokémon.",
			'pt-br': "Se você tiver Simisage, Simisear e Simipour em jogo, ignore todas as Energias {C} nos custos dos ataques usados por este Pokémon.",
			'de-de': "Wenn du Vegichita, Grillchita und Sodachita im Spiel hast, ignoriere alle {C}-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Arm Thrust Needle",
			'fr-fr': "Cogne Aiguille",
			'es-es': "Púa Empujón",
			'it-it': "Ago Sberletese",
			'pt-br': "Golpe de Braço Espinhoso",
			'de-de': "Armstoßnadel"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability, except any Simisage.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques de Pokémon ayant un talent, à l'exception d'un Feuiloutan.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon que tengan una habilidad, excepto de los Simisage.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon che hanno un'abilità, a eccezione di qualsiasi Simisage.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon que têm uma Habilidade, exceto por quaisquer Simisage.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon, die eine Fähigkeit haben, zugefügt wird, außer Vegichita."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740481,
				tcgplayer: 523604,
				cardtrader: 265012
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740481,
				tcgplayer: 523604,
				cardtrader: 265012
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
