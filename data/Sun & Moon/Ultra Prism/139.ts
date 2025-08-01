import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Leafeon GX",
		fr: "Phyllali GX",
		es: "Leafeon GX",
		it: "Leafeon GX",
		pt: "Leafeon GX",
		de: "Folipurba GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 200,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Breath of the Leaves",
				fr: "Souffle du Feuillage",
				es: "Respiro de las Hojas",
				it: "Alito di Foglie",
				pt: "Hálito de Folhas",
				de: "Atem der Blätter"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may heal 50 damage from 1 of your Pokémon that has any Energy attached to it.",
				fr: "Si ce Pokémon est votre Pokémon Actif, une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 50 dégâts à l’un de vos Pokémon auquel de l’Énergie est attachée.",
				es: "Si este Pokémon es tu Pokémon Activo, una vez durante tu turno (antes de tu ataque), puedes curar 50 puntos de daño a 1 de tus Pokémon que tenga alguna Energía unida a él.",
				it: "Una sola volta durante il tuo turno, se questo Pokémon è il tuo Pokémon attivo, prima di attaccare, puoi curare da 50 danni uno dei tuoi Pokémon che ha Energie assegnate.",
				pt: "Se este Pokémon for o seu Pokémon Ativo, uma vez durante a sua vez de jogar (antes de atacar), você poderá curar 50 pontos de dano de 1 dos seus Pokémon que tiver alguma Energia ligada a ele.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist, kannst du einmal während deines Zuges (bevor du angreifst) 50 Schadenspunkte bei 1 deiner Pokémon heilen, an das mindestens 1 Energie angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},

			damage: 110,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grand Bloom GX",
				fr: "Efflorescence-GX",
				es: "Gran Floración GX",
				it: "Fioritura Formidabile-GX",
				pt: "Floração Grandiosa GX",
				de: "Blütezeit GX"
			},
			effect: {
				en: "For each of your Benched Basic Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Pour chacun de vos Pokémon de Banc de base, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Por cada uno de tus Pokémon Básicos en Banca, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Per ogni Pokémon Base nella tua panchina, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Para cada um dos seus Pokémon Básicos no Banco, procure por 1 carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Durchsuche pro Basis-Pokémon auf deiner Bank dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 315503
	}
}

export default card
