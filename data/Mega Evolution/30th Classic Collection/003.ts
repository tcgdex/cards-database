import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [376],

	name: {
		en: "Metagross",
		fr: "Metalosse",
		de: "Metagross",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		'es-mx': "Metagross"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Crush and Burn",
			fr: "Écra-brûle",
			de: "Falten und Frittieren",
			es: "Arrasar y quemar",
			it: "Spacca e Brucia",
			pt: "Esmagar e Queimar",
			'es-mx': "Arrasar y quemar"
		},

		effect: {
			en: "You may discard as many Energy cards as you like attached to your Pokémon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy card you discarded.",
			fr: "Vous pouvez défausser autant de cartes Énergie attachées aux Pokémon que vous avez en jeu que vous voulez. Cette attaque inflige alors 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie défaussée.",
			de: "Du kannst beliebig viele Energiekarten, die an deine Pokémon angelegt sind, auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede abgelegte Energiekarte zu.",
			es: "Puedes descartar tantas cartas de Energía unidas a tus Pokémon en juego como quieras. Si lo haces, este ataque hace 30 puntos de daño más otros 20 puntos de daño adicionales por cada carta de Energía que descartaste.",
			it: "Puoi scartare qualunque numero di carte Energia assegnate ai tuoi Pokémon in gioco. Se lo fai, questo attacco infligge 30 danni più altri 20 danni per ogni carta Energia che hai scartato.",
			pt: "Você pode descartar quantos cards de Energia quiser, ligados aos seus Pokémon no campo. Se você o fizer, este ataque causa 30 de dano mais 20 de dano adicionais para cada card de Energia que você descartou.",
			'es-mx': "Puedes descartar cuantas Energías quieras unidas a tus Pokémon en juego. Si lo haces, este ataque hace 30 puntos de daño más 20 puntos de daño adicionales por cada Energía que descartaste."
		},

		damage: "30+",
		cost: ["Lightning", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907949,
				tcgplayer: 716157
			}
		}
	],
}

export default card