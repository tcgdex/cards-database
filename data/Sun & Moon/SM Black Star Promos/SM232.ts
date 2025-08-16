import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu GX",
		fr: "Pikachu GX",
		es: "Pikachu GX",
		it: "Pikachu GX",
		pt: "Pikachu GX",
		de: "Pikachu GX"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Agility",
			fr: "Hâte",
			es: "Agilidad",
			it: "Agilità",
			pt: "Agilidade",
			de: "Agilität"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
			it: "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
			pt: "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Volt Tackle",
			fr: "Électacle",
			es: "Placaje Eléc",
			it: "Locomovolt",
			pt: "Investida Trovão",
			de: "Volttackle"
		},

		damage: 150,

		effect: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
			es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge 30 danni a se stesso.",
			pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}, {
		name: {
			en: "Tail Break GX",
			fr: "Queue Brisante GX",
			es: "Coletazo Destrozo GX",
			it: "Coda Sfondamento GX",
			pt: "Cauda Destruidora GX",
			de: "Schweifbruch GX"
		},

		damage: 100,

		effect: {
			en: "Your opponent’s Active Pokémon is now Paralyzed. (You can’t use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			es: "El Pokémon Activo de tu rival pasa a estar Paralizado. (No puedes usar más de 1 ataque GX en una partida).",
			it: "Il Pokémon attivo del tuo avversario viene paralizzato. Non puoi usare più di un attacco GX a partita.",
			pt: "O Pokémon Ativo do seu oponente agora está Paralisado (você não pode usar mais de 1 ataque GX por partida).",
			de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 1
}

export default card