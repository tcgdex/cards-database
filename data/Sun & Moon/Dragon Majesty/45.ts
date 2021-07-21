import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		es: "Druddigon",
		it: "Druddigon",
		pt: "Druddigon",
		de: "Shardrago"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		621,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rough Skin",
				fr: "Peau Dure",
				es: "Piel Tosca",
				it: "Cartavetro",
				pt: "Pele Áspera",
				de: "Rauhaut"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
				pt: "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
