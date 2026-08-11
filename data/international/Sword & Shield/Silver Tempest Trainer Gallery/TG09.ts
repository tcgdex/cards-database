import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	dexId: [621],
	set: Set,

	name: {
		'en-us': "Druddigon",
		'fr-fr': "Drakkarmin",
		'es-es': "Druddigon",
		'it-it': "Druddigon",
		'pt-br': "Druddigon",
		'de-de': "Shardrago"
	},

	illustrator: "Teeziro",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			'en-us': "Revenge",
			'fr-fr': "Vendetta",
			'es-es': "Desquite",
			'it-it': "Vendetta",
			'pt-br': "Vingança",
			'de-de': "Vergeltung"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 120 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 120 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'it-it': "Dragartigli",
			'pt-br': "Garra de Dragão",
			'de-de': "Drachenklaue"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "E",


	description: {
		'en-us': "Druddigon are vicious and cunning. They take up residence in nests dug out by other Pokémon, treating the stolen nests as their own lairs.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682273,
				tcgplayer: 452023
			}
		},
	],
}

export default card
