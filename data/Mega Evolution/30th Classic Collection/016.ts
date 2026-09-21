import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Rayquaza EX",
		fr: "Rayquaza EX",
		de: "Rayquaza EX",
		es: "Rayquaza EX",
		it: "Rayquaza EX",
		pt: "Rayquaza EX",
		'es-mx': "Rayquaza EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Celestial Roar",
			fr: "Cri du Ciel",
			de: "Himmelsgrollen",
			es: "Rugido Celestial",
			it: "Gentilboato",
			pt: "Rugido Celestial",
			'es-mx': "Rugido Celestial"
		},

		effect: {
			en: "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
			fr: "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Wenn darunter Energiekarten sind, lege sie an dieses Pokémon an.",
			es: "Descarta las 3 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía, únelas a este Pokémon.",
			it: "Scarta le prime tre carte del tuo mazzo. Se fra queste ci sono delle carte Energia, assegnale a questo Pokémon.",
			pt: "Descarte os 3 cards de cima do seu baralho. Se qualquer um desses cards for um card de Energia, ligue-o a este Pokémon.",
			'es-mx': "Descarta las primeras 3 cartas de tu mazo. Si entre esas cartas hay cartas de Energía, únelas a este Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Dragon Burst",
			fr: "Fureur du Dragon",
			de: "Drachensalve",
			es: "Explosión Dragón",
			it: "Dragoscoppio",
			pt: "Rajada do Dragão",
			'es-mx': "Estallido Dracónico"
		},

		effect: {
			en: "Discard all basic <span class=\"energy-symbol Fire\" title=\"Fire\">Fire</span> Energy or all basic <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy attached to this Pokémon. This attack does 60 damage times the number of Energy cards you discarded.",
			fr: "Défaussez toutes les Énergies <span class=\"energy-symbol Fire\" title=\"Feu\">Fire</span> de base ou toutes les Énergies <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> de base attachées à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			de: "Lege alle an dieses Pokémon angelegten <span class=\"energy-symbol Fire\" title=\"Feuer\">Fire</span>-Basis-Energien oder <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Basis-Energien auf deinen Ablagestapel. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu.",
			es: "Descarta todas las Energías Básicas <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> o todas las Energías Básicas <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> unidas a este Pokémon. Este ataque hace 60 puntos de daño por cada carta de Energía que hayas descartado.",
			it: "Scarta tutte le Energie base <span class=\"energy-symbol Fire\" title=\"Fuoco\">Fire</span> o tutte le Energie base <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> assegnate a questo Pokémon. Questo attacco infligge 60 danni per ogni carta Energia che hai scartato.",
			pt: "Descarte todas as Energias <span class=\"energy-symbol Fire\" title=\"Fogo\">Fire</span> ou <span class=\"energy-symbol Lightning\" title=\"Raios\">Lightning</span> básicas ligadas a este Pokémon. Esse ataque causa 60 de danos vezes o número de cards de Energia descartados.",
			'es-mx': "Descarta todas las Energías Básicas <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> o todas las Energías Básicas <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> unidas a este Pokémon. Este ataque hace 60 puntos de daño por cada carta de Energía que descartaste."
		},

		damage: "60×",
		cost: ["Fire", "Lightning"]
	}],

	weaknesses: [{
		type: "Dragon",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907957,
				tcgplayer: 716196
			}
		}
	],
}

export default card