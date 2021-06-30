import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Sandslash-GX",
		fr: "Sablaireau d’Alola-GX",
		es: "Sandslash de Alola-GX",
		it: "Sandslash di Alola-GX",
		pt: "Sandslash de Alola-GX",
		de: "Alola-Sandamer-GX"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Spiky Shield",
			fr: "Pico-Défense",
			es: "Barrera Espinosa",
			it: "Agodifesa",
			pt: "Escudo Espinhoso",
			de: "Schutzstacheln"
		},

		effect: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 3 contadores de danos no Pokémon Atacante.",
			de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
			es: "Vaho Gélido",
			it: "Alitogelido",
			pt: "Respiração de Gelo",
			de: "Eisesodem"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Spiky Storm GX",
			fr: "Tempête Piquante GX",
			es: "Tormenta Espinosa GX",
			it: "Agotempesta GX",
			pt: "Tempestade Espinhosa GX",
			de: "Stachel-Offensive GX"
		},

		effect: {
			en: "This attack does 100 damage to each of your opponent’s Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			es: "Este ataque hace 100 puntos de daño a cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
			it: "Questo attacco infligge 100 danni a ciascuno dei Pokémon del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
			pt: "Este ataque causa 100 pontos de dano a cada um dos Pokémon do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card