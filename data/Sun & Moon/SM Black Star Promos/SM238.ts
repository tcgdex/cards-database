import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		en: "Glaceon",
		fr: "Givrali",
		es: "Glaceon",
		it: "Glaceon",
		pt: "Glaceon",
		de: "Glaziola"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Snow Cloak",
			fr: "Rideau Neige",
			es: "Manto Níveo",
			it: "Mantelneve",
			pt: "Manto Nevado",
			de: "Schneemantel"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
			it: "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
			pt: "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Hypnotic Blizzard",
			fr: "Blizzard Hypnotique",
			es: "Ventisca Hipnótica",
			it: "Bufera Ipnotica",
			pt: "Nevasca Hipnótica",
			de: "Hypnotischer Blizzard"
		},

		damage: 90,

		effect: {
			en: "Your opponent’s Active Pokémon is now Asleep. This attack does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido. Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Il Pokémon attivo del tuo avversario viene addormentato. Questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido. Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt. Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card