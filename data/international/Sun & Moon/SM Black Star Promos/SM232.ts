import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu GX",
		'fr-fr': "Pikachu GX",
		'es-es': "Pikachu GX",
		'it-it': "Pikachu GX",
		'pt-br': "Pikachu GX",
		'de-de': "Pikachu GX"
	},

	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Agility",
			'fr-fr': "Hâte",
			'es-es': "Agilidad",
			'it-it': "Agilità",
			'pt-br': "Agilidade",
			'de-de': "Agilität"
		},

		damage: 20,

		effect: {
			'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
			'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Volt Tackle",
			'fr-fr': "Électacle",
			'es-es': "Placaje Eléc",
			'it-it': "Locomovolt",
			'pt-br': "Investida Trovão",
			'de-de': "Volttackle"
		},

		damage: 150,

		effect: {
			'en-us': "This Pokémon does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
			'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
			'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}, {
		name: {
			'en-us': "Tail Break GX",
			'fr-fr': "Queue Brisante GX",
			'es-es': "Coletazo Destrozo GX",
			'it-it': "Coda Sfondamento GX",
			'pt-br': "Cauda Destruidora GX",
			'de-de': "Schweifbruch GX"
		},

		damage: 100,

		effect: {
			'en-us': "Your opponent’s Active Pokémon is now Paralyzed. (You can’t use more than 1 GX attack in a game.)",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado. (No puedes usar más de 1 ataque GX en una partida).",
			'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato. Non puoi usare più di un attacco GX a partita.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado (você não pode usar mais de 1 ataque GX por partida).",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 1,
}

export default card
