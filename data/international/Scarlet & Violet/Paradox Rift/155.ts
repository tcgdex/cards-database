import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [925],
	set: Set,

	name: {
		'en-us': "Maushold ex",
		'fr-fr': "Famignol-ex",
		'es-es': "Maushold ex",
		'it-it': "Maushold-ex",
		'pt-br': "Maushold ex",
		'de-de': "Famieps-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Tandemaus",
		'fr-fr': "Compagnol",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solidarity",
			'fr-fr': "Solidarité",
			'es-es': "Solidaridad",
			'it-it': "Solidarietà",
			'pt-br': "Solidariedade",
			'de-de': "Solidarität"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon for each of your Tandemaus, Maushold, and Maushold ex in play.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant pour chacun de vos Compagnol, Famignol et Famignol-ex en jeu.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante por cada uno de tus Tandemaus, Maushold y Maushold ex en juego.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante per ogni tuo Tandemaus, Maushold e Maushold-ex in gioco.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante para cada um dos seus Tandemaus, Maushold e Maushold ex em jogo.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon für jedes Zwieps, Famieps und Famieps-ex im Spiel."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Nom-Nom-Nom Incisors",
			'fr-fr': "Triple Incisive",
			'es-es': "Incisivos Ñam-Ñam-Ñam",
			'it-it': "Incisivi Masticanti",
			'pt-br': "Incisivos Nham-nham-nham",
			'de-de': "Mjam-Mjam-Mjam-Nager"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740695,
				tcgplayer: 523836,
				cardtrader: 265259
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
