import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [652],
	set: Set,

	name: {
		'en-us': "Chesnaught V",
		'fr-fr': "Blindépique V",
		'es-es': "Chesnaught V",
		'it-it': "Chesnaught V",
		'pt-br': "Chesnaught V",
		'de-de': "Brigaron V"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Needle Line",
			'fr-fr': "Ligne Piquante",
			'es-es': "Línea de Espinas",
			'it-it': "Linea Acuminata",
			'pt-br': "Linha de Agulhas",
			'de-de': "Nadellinie"
		},

		effect: {
			'en-us': "If your Active Chesnaught V is damaged by an attack from your opponent's Pokémon (even if it is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si le Blindépique-V sur votre Poste Actif subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même s'il est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Si tu Chesnaught V Activo resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			'it-it': "Se il tuo Chesnaught-V attivo viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			'pt-br': "Se o seu Chesnaught V Ativo for danificado por um ataque dos Pokémon do seu oponente (mesmo que ele seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn dein Aktives Brigaron-V durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Touchdown",
			'fr-fr': "Touchdown",
			'es-es': "Gol",
			'it-it': "Meta",
			'pt-br': "Aterrissagem",
			'de-de': "Touchdown"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682056,
				tcgplayer: 451643
			}
		},
	],
}

export default card
