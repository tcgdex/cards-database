import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Koffing",
		fr: "Smogo de la Team Rocket",
		de: "Team Rockets Smogon",
		it: "Koffing del Team Rocket",
		es: "Koffing del Team Rocket",
		pt: "Koffing da Equipe Rocket",
		'es-mx': "Koffing del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Smog Signals",
			fr: "Signaux de Purédpois",
			de: "Smogsignale",
			it: "Segnali di Smog",
			es: "Señales de Polución",
			pt: "Sinais de Fumaça",
			'es-mx': "Señales de Humo"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), search your deck for up to 2 Pokémon that have \"Koffing\" in their name and put them onto your Bench. Then, shuffle your deck.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), cherchez dans votre deck jusqu'à 2 Pokémon ayant \" Smogo \" dans leur nom, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), durchsuche dein Deck nach bis zu 2 Pokémon, bei denen \"Smogon\" zum Namen gehört, und lege sie auf deine Bank. Mische anschließend dein Deck.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, cerca nel tuo mazzo fino a due Pokémon che hanno \"Koffing\" nel nome e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), busca en tu baraja hasta 2 Pokémon que tengan \"Koffing\" en su nombre y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), procure por até 2 Pokémon no seu baralho que tenham \"Koffing\" em seu nome e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), busca en tu mazo hasta 2 Pokémon que tengan \"Koffing\" en su nombre y ponlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Leaking Gas",
			fr: "Échappée de Gaz",
			de: "Austretendes Gas",
			it: "Fuoriuscita di Gas",
			es: "Fuga de Gas",
			pt: "Escape de Gás",
			'es-mx': "Fuga de Gas"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
