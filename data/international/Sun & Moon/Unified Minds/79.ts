import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Jirachi GX",
		'fr-fr': "Jirachi GX",
		'es-es': "Jirachi GX",
		'it-it': "Jirachi GX",
		'pt-br': "Jirachi GX",
		'de-de': "Jirachi GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Psychic Zone",
				'fr-fr': "Zone Psy",
				'es-es': "Zona Psíquica",
				'it-it': "Zona Psichica",
				'pt-br': "Zona Psíquica",
				'de-de': "Psycho-Zone"
			},
			effect: {
				'en-us': "Don’t apply Psychic Weakness when Pokémon (both yours and your opponent’s) take damage from attacks.",
				'fr-fr': "N’appliquez pas la Faiblesse Psychic lorsque les Pokémon (les vôtres et ceux de votre adversaire) subissent des dégâts d’attaques.",
				'es-es': "No apliques Debilidad Psychic cuando los Pokémon (tanto tuyos como de tu rival) reciben daño de ataques.",
				'it-it': "Non applicare la debolezza al tipo Psychic quando i Pokémon, sia tuoi che del tuo avversario, subiscono danni dagli attacchi.",
				'pt-br': "Não aplique Fraqueza Psychic quando Pokémon (seus e do seu oponente) recebem dano de ataques.",
				'de-de': "Wende Psychic-Schwäche nicht an, wenn Pokémon (deinen und denen deines Gegners) durch Attacken Schaden zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Star Search",
				'fr-fr': "Recherche Étoile",
				'es-es': "Búsqueda Estelar",
				'it-it': "Ricerca Stellare",
				'pt-br': "Busca por Estrelas",
				'de-de': "Sternenfund"
			},
			effect: {
				'en-us': "Search your deck for an Energy card and attach it to 1 of your Psychic Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte Énergie dans votre deck et attachez-la à l’un de vos Pokémon Psychic. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía y únela a 1 de tus Pokémon Psychic. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia e assegnala a uno dei tuoi Pokémon Psychic. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon Psychic. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 deiner Psychic-Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Star Shield GX",
				'fr-fr': "Bouclier Étoile GX",
				'es-es': "Escudo Estelar GX",
				'it-it': "Difesa Stellare GX",
				'pt-br': "Escudo de Estrela GX",
				'de-de': "Sternenschild GX"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 378870,
		tcgplayer: 195009
	}
}

export default card
