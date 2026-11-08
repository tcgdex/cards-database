import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'es-es': "Magmortar",
		'it-it': "Magmortar",
		'pt-br': "Magmortar",
		'de-de': "Magbrant"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Incandescent Body",
				'fr-fr': "Corps Incandescent",
				'es-es': "Cuerpo Incandescente",
				'it-it': "Corpo Incandescente",
				'pt-br': "Corpo Incandescente",
				'de-de': "Innere Weißglut"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
				'pt-br': "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante será Queimado.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Blaster",
				'fr-fr': "Explosif Enflammé",
				'es-es': "Explosión Fuego",
				'it-it': "Sparafiamme",
				'pt-br': "Detonador de Fogo",
				'de-de': "Feuer-Blaster"
			},
			effect: {
				'en-us': "You may discard 2 Energy from this Pokémon. If you do, this attack does 80 more damage.",
				'fr-fr': "Vous pouvez défausser 2 Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Puedes descartar 2 Energías de este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
				'it-it': "Puoi scartare due Energie assegnate a questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
				'pt-br': "Você pode descartar 2 Energias deste Pokémon. Se fizer isto, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Du kannst 2 Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "From its arm, it launches fireballs hotter than 3,500 degrees Fahrenheit. Its arm starts to melt when it fires a whole barrage.",
	},

	thirdParty: {
		cardmarket: 315950,
		tcgplayer: 157636
	}
}

export default card
