import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [968],
	set: Set,

	name: {
		'en-us': "Orthworm ex",
		'fr-fr': "Ferdeter-ex",
		'es-es': "Orthworm ex",
		'it-it': "Orthworm-ex",
		'pt-br': "Orthworm ex",
		'de-de': "Schlurm-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Pummeling Payback",
			'fr-fr': "Représailles Martelage",
			'es-es': "Venganza Demoledora",
			'it-it': "Rivincita Furiosa",
			'pt-br': "Vingança Demolidora",
			'de-de': "Faustdicke Vergeltung"
		},

		effect: {
			'en-us': "If this Pokémon is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon for each {M} Energy attached to this Pokémon.",
			'fr-fr': "Si ce Pokémon subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant pour chaque Énergie {M} attachée à ce Pokémon.",
			'es-es': "Si este Pokémon resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante por cada Energía {M} unida a este Pokémon.",
			'it-it': "Se questo Pokémon viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti due segnalini danno sul Pokémon attaccante per ogni Energia {M} assegnata a questo Pokémon.",
			'pt-br': "Se este Pokémon for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 2 contadores de dano no Pokémon Atacante para cada Energia {M} ligada a este Pokémon.",
			'de-de': "Wenn dieses Pokémon durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon für jede an dieses Pokémon angelegte {M}-Energie."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rock Tomb",
			'fr-fr': "Tomberoche",
			'es-es': "Tumba Rocas",
			'it-it': "Rocciotomba",
			'pt-br': "Tumba de Rochas",
			'de-de': "Felsgrab"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 786016,
				tcgplayer: 567457
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

}

export default card
