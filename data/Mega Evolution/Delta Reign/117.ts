import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Kecleon",
		fr: "Kecleon",
		de: "Kecleon",
		es: "Kecleon",
		it: "Kecleon",
		pt: "Kecleon",
		'es-mx': "Kecleon"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Colorful Whip",
			fr: "Fouet Coloré",
			de: "Bunte Peitsche",
			es: "Látigo Colorido",
			it: "Frustata Variopinta",
			pt: "Chicote Colorido",
			'es-mx': "Látigo Colorido"
		},

		effect: {
			en: "Reveal any number of Pokémon from your hand, and this attack does 30 damage for each different type of Pokémon you revealed in this way.",
			fr: "Montrez le nombre voulu de Pokémon de votre main. Cette attaque inflige 30 dégâts pour chaque type différent de Pokémon montré de cette façon.",
			de: "Zeige deinem Gegner beliebig viele Pokémon auf deiner Hand, und diese Attacke fügt für jeden verschiedenen Pokémon-Typ, den du auf diese Weise gezeigt hast, 30 Schadenspunkte zu.",
			es: "Enseña cualquier cantidad de Pokémon de tu mano, y este ataque hace 30 puntos de daño por cada tipo de Pokémon diferente que hayas enseñado de esta manera.",
			it: "Mostra un numero qualsiasi di Pokémon che hai in mano e questo attacco infligge 30 danni per ogni tipo diverso di Pokémon che hai mostrato in questo modo.",
			pt: "Revele qualquer número de Pokémon da sua mão, e este ataque causa 30 pontos de dano para cada tipo diferente de Pokémon revelado desta forma.",
			'es-mx': "Muestra cualquier cantidad de Pokémon de tu mano, y este ataque hace 30 puntos de daño por cada tipo de Pokémon diferente que mostraste de esta manera."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 726567,
		cardmarket: 918911
	}
}

export default card