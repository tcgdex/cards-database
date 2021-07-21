import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		it: "Magmortar",
		pt: "Magmortar",
		de: "Magbrant"
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
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Incandescent Body",
				fr: "Corps Incandescent",
				es: "Cuerpo Incandescente",
				it: "Corpo Incandescente",
				pt: "Corpo Incandescente",
				de: "Innere Weißglut"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
				pt: "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante será Queimado.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
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
				en: "Fire Blaster",
				fr: "Explosif Enflammé",
				es: "Explosión Fuego",
				it: "Sparafiamme",
				pt: "Detonador de Fogo",
				de: "Feuer-Blaster"
			},
			effect: {
				en: "You may discard 2 Energy from this Pokémon. If you do, this attack does 80 more damage.",
				fr: "Vous pouvez défausser 2 Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Puedes descartar 2 Energías de este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
				it: "Puoi scartare due Energie assegnate a questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
				pt: "Você pode descartar 2 Energias deste Pokémon. Se fizer isto, este ataque causará 80 pontos de dano a mais.",
				de: "Du kannst 2 Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 80 Schadenspunkte mehr zu."
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



}

export default card
