import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [512],
	set: Set,

	name: {
		en: "Simisage",
		fr: "Feuiloutan",
		es: "Simisage",
		it: "Simisage",
		pt: "Simisage",
		de: "Vegichita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Monkey Trio",
			fr: "Trio Simiesque",
			es: "Trío de Monos",
			it: "Trio delle Scimmie",
			pt: "Trio Primata",
			de: "Affentrio"
		},

		effect: {
			en: "If you have Simisage, Simisear, and Simipour in play, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Feuiloutan, Flamoutan et Flotoutan en jeu, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon.",
			es: "Si tienes a Simisage, Simisear y Simipour en juego, ignora todas las Energías {C} en los costes de los ataques usados por este Pokémon.",
			it: "Se hai in gioco Simisage, Simisear e Simipour, ignora tutte le Energie {C} necessarie per gli attacchi usati da questo Pokémon.",
			pt: "Se você tiver Simisage, Simisear e Simipour em jogo, ignore todas as Energias {C} nos custos dos ataques usados por este Pokémon.",
			de: "Wenn du Vegichita, Grillchita und Sodachita im Spiel hast, ignoriere alle {C}-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Arm Thrust Needle",
			fr: "Cogne Aiguille",
			es: "Púa Empujón",
			it: "Ago Sberletese",
			pt: "Golpe de Braço Espinhoso",
			de: "Armstoßnadel"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability, except any Simisage.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques de Pokémon ayant un talent, à l'exception d'un Feuiloutan.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon que tengan una habilidad, excepto de los Simisage.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon che hanno un'abilità, a eccezione di qualsiasi Simisage.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon que têm uma Habilidade, exceto por quaisquer Simisage.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon, die eine Fähigkeit haben, zugefügt wird, außer Vegichita."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kurata So",

	thirdParty: {
		cardmarket: 740481
	}
}

export default card