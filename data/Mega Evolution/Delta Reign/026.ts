import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Kyogre",
		fr: "Kyogre",
		de: "Kyogre",
		es: "Kyogre",
		it: "Kyogre",
		pt: "Kyogre",
		'es-mx': "Kyogre"
	},

	illustrator: "Anderson",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade",
			de: "Kaskade",
			es: "Cascada",
			it: "Cascata",
			pt: "Cachoeira",
			'es-mx': "Cascada"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			en: "Brutal Whirlpool",
			fr: "Tourbillon Brutal",
			de: "Brutaler Strudel",
			es: "Remolinos Brutales",
			it: "Mulinello Spietato",
			pt: "Redemoinho Brutal",
			'es-mx': "Remolino Brutal"
		},

		effect: {
			en: "If a Stadium that has \"Legendary\" in its name is in play, this attack also does 50 damage to each of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Si un Stade ayant \" Légendaire \" dans son nom est en jeu, cette attaque inflige aussi 50 dégâts à chacun des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Wenn ein Stadion im Spiel ist, bei dem \"Legendär\" zum Namen gehört, fügt diese Attacke auch jedem Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Si hay un Estadio en juego que tenga \"Legendario\" en su nombre, este ataque también hace 50 puntos de daño a cada uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Se c'è una carta Stadio in gioco che ha \"Leggendario\" o \"Leggendaria\" nel nome, questo attacco infligge anche 50 danni a ciascuno dei Pokémon nella panchina del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Se um Estádio que tem \"Lendário\" em seu nome estiver em jogo, este ataque também causará 50 pontos de dano a cada um dos Pokémon no Banco do seu oponente. <em>(Não aplique Fraqueza e Resistência aos Pokémon no Banco.)</em>",
			'es-mx': "Si hay un Estadio en juego que tenga \"Legendario\" en su nombre, este ataque también hace 50 puntos de daño a cada uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726519,
				cardmarket: 918841
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726519,
				cardmarket: 918841
			}
		}
	],
}

export default card