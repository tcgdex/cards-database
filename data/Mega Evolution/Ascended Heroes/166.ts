import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [301],

	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		'es-mx': "Delcatty",
		de: "Enekoro",
		it: "Delcatty",
		pt: "Delcatty"
	},

	illustrator: "buchi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Cat Kick",
			fr: "Coup d'Patte",
			es: "Patada Gato",
			'es-mx': "Patada Gatuna",
			de: "Katzenkick",
			it: "Calciogatto",
			pt: "Chute do Gato"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
			es: "Comprimir Energía",
			'es-mx': "Aplastamiento de Energía",
			de: "Zermalmende Energie",
			it: "Sgretolenergia",
			pt: "Esmagamento de Energia"
		},

		effect: {
			en: "This attack does 40 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente."
		},

		damage: "40×"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675978,
		cardmarket: 869777
	}
}

export default card