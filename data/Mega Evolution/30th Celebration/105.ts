import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Solgaleo was once known as the Beast That Devours the Sun. Energy in the form of light radiates boundlessly from it."
	},

	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
		de: "Solgaleo",
		es: "Solgaleo",
		it: "Solgaleo",
		'es-mx': "Solgaleo"
	},

	illustrator: "Nurikabe",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [791],
	hp: 170,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sunrise",
			fr: "Lever du Jour",
			de: "Sonnenaufgang",
			es: "Amanecer",
			it: "Alba",
			'es-mx': "Amanecer"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may use this Ability. Search your deck for up to 2 Basic Metal Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez utiliser ce talent. Cherchez dans votre deck jusqu'à 2 cartes Énergie Metal de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Bank ist, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach bis zu 2 Basis-Metal-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes usar esta habilidad. Busca en tu baraja hasta 2 cartas de Energía Metal Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi usare questa abilità. Cerca nel tuo mazzo fino a due carte Energia base Metal e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes usar esta Habilidad. Busca en tu mazo hasta 2 cartas de Energía Metal Básica y únelas a este Pokémon. Después, baraja tu mazo."
		}
	}],

	attacks: [{
		name: {
			en: "Sunsteel Strike",
			fr: "Choc Météore",
			de: "Stahlgestirn",
			es: "Meteoimpacto",
			it: "Astrocarica",
			'es-mx': "Meteoimpacto"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 220,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907712,
				tcgplayer: 716498
			}
		}
	],
}

export default card