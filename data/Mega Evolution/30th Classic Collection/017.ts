import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [791],

	name: {
		en: "Solgaleo GX",
		fr: "Solgaleo GX",
		de: "Solgaleo GX",
		es: "Solgaleo GX",
		it: "Solgaleo GX",
		pt: "Solgaleo GX",
		'es-mx': "Solgaleo GX"
	},

	illustrator: "PLANETA",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 250,
	types: ["Metal"],
	stage: "Basic",
	suffix: "GX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ultra Road",
			fr: "Ultra-Route",
			de: "Ultraweg",
			es: "Camino Ultra",
			it: "Ultrapista",
			pt: "Ultracaminho",
			'es-mx': "Ultracamino"
		},

		effect: {
			en: "Once during your turn		(before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l'un de vos Pokémon de Banc.",
			de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca.",
			it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
			pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
			'es-mx': "Una vez durante tu turno (antes de tu ataque), puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca."
		}
	}],

	attacks: [{
		name: {
			en: "Sunsteel Strike",
			fr: "Choc Météore",
			de: "Stahlgestirn",
			es: "Meteoimpacto",
			it: "Astrocarica",
			pt: "Ataque Solaraço",
			'es-mx': "Meteoimpacto"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie assegnate a questo Pokémon.",
			pt: "Descarte toda a Energia deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 230,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			en: "Sol Burst {GX}",
			fr: "Éclat Solaire {GX}",
			de: "Solarplosion {GX}",
			es: "Explosión Sol {GX}",
			it: "Raffica Solare {GX}",
			pt: "Irradiação Solar {GX}",
			'es-mx': "Estallido Solar {GX}"
		},

		effect: {
			en: "Search your deck for up to 5 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. <em>(You can't use more than 1 <em>GX</em> attack in a game.)</em>",
			fr: "Cherchez jusqu'à 5 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck. <em>(Vous ne pouvez utiliser qu'une attaque <em>GX</em> par partie.)</em>",
			de: "Durchsuche dein Deck nach bis zu 5 Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck. <em>(Du kannst pro Spiel nur 1 <em>GX</em>-Attacke einsetzen.)</em>",
			es: "Busca en tu baraja hasta 5 cartas de Energía y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja. <em>(No puedes usar más de 1 ataque <em>GX</em> en una partida)</em>.",
			it: "Cerca nel tuo mazzo fino a cinque carte Energia e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo. <em>Non puoi usare più di un attacco <em>GX</em> a partita</em>.",
			pt: "Procure por até 5 cartas de Energia no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho <em>(você não pode usar mais de 1 ataque <em>GX</em> por partida).</em>",
			'es-mx': "Busca en tu mazo hasta 5 cartas de Energía y únelas a tus Pokémon de la manera que quieras. Después, baraja tu mazo. <em>(No puedes usar más de 1 ataque <em>GX</em> por partida)</em>."
		},

		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907961,
				tcgplayer: 716197
			}
		}
	],
}

export default card
