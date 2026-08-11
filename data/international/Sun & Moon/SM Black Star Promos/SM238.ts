import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'es-es': "Glaceon",
		'it-it': "Glaceon",
		'pt-br': "Glaceon",
		'de-de': "Glaziola"
	},

	illustrator: "Mizue",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Snow Cloak",
			'fr-fr': "Rideau Neige",
			'es-es': "Manto Níveo",
			'it-it': "Mantelneve",
			'pt-br': "Manto Nevado",
			'de-de': "Schneemantel"
		},

		damage: 30,

		effect: {
			'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
			'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
		},

		cost: ["Water"]
	}, {
		name: {
			'en-us': "Hypnotic Blizzard",
			'fr-fr': "Blizzard Hypnotique",
			'es-es': "Ventisca Hipnótica",
			'it-it': "Bufera Ipnotica",
			'pt-br': "Nevasca Hipnótica",
			'de-de': "Hypnotischer Blizzard"
		},

		damage: 90,

		effect: {
			'en-us': "Your opponent’s Active Pokémon is now Asleep. This attack does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi. Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido. Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato. Questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido. Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt. Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "It protects itself by freezing its fur into sharp needles. It can drop its body temperature below –75 degrees Fahrenheit.",
	},
}

export default card
