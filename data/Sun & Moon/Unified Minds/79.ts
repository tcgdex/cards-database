import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Jirachi GX",
		fr: "Jirachi GX",
		es: "Jirachi GX",
		it: "Jirachi GX",
		pt: "Jirachi GX",
		de: "Jirachi GX"
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
				en: "Psychic Zone",
				fr: "Zone Psy",
				es: "Zona Psíquica",
				it: "Zona Psichica",
				pt: "Zona Psíquica",
				de: "Psycho-Zone"
			},
			effect: {
				en: "Don’t apply Psychic Weakness when Pokémon (both yours and your opponent’s) take damage from attacks.",
				fr: "N’appliquez pas la Faiblesse Psychic lorsque les Pokémon (les vôtres et ceux de votre adversaire) subissent des dégâts d’attaques.",
				es: "No apliques Debilidad Psychic cuando los Pokémon (tanto tuyos como de tu rival) reciben daño de ataques.",
				it: "Non applicare la debolezza al tipo Psychic quando i Pokémon, sia tuoi che del tuo avversario, subiscono danni dagli attacchi.",
				pt: "Não aplique Fraqueza Psychic quando Pokémon (seus e do seu oponente) recebem dano de ataques.",
				de: "Wende Psychic-Schwäche nicht an, wenn Pokémon (deinen und denen deines Gegners) durch Attacken Schaden zugefügt wird."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Star Search",
				fr: "Recherche Étoile",
				es: "Búsqueda Estelar",
				it: "Ricerca Stellare",
				pt: "Busca por Estrelas",
				de: "Sternenfund"
			},
			effect: {
				en: "Search your deck for an Energy card and attach it to 1 of your Psychic Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie dans votre deck et attachez-la à l’un de vos Pokémon Psychic. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía y únela a 1 de tus Pokémon Psychic. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia e assegnala a uno dei tuoi Pokémon Psychic. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon Psychic. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 deiner Psychic-Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Star Shield GX",
				fr: "Bouclier Étoile GX",
				es: "Escudo Estelar GX",
				it: "Difesa Stellare GX",
				pt: "Escudo de Estrela GX",
				de: "Sternenschild GX"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
