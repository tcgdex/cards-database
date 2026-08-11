import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galarian Cursola",
		'fr-fr': "Corayôme de Galar",
		'es-es': "Cursola de Galar",
		'it-it': "Cursola di Galar",
		'pt-br': "Cursola de Galar",
		'de-de': "Galar-Gorgasonn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [864],
	set: Set,

	evolveFrom: {
		'en-us': "Galarian Corsola",
		'fr-fr': "Corayon de Galar",
		'es-es': "Corsola de Galar",
		'it-it': "Corsola di Galar",
		'pt-br': "Corsola de Galar",
		'de-de': "Galar-Corasonn"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Perish Body",
				'fr-fr': "Corps Condamné",
				'es-es': "Cuerpo Mortal",
				'it-it': "Ultimotocco",
				'pt-br': "Corpo Perecido",
				'de-de': "Unheilskörper"
			},
			effect: {
				'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
				'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
				'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate.",
				'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco dell'avversario, lancia una moneta. Se esce testa, il Pokémon attaccante viene messo KO.",
				'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque do seu oponente, jogue 1 moeda. Se sair cara, o Pokémon Atacante será Nocauteado.",
				'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, wirf 1 Münze. Bei Kopf ist das Angreifende Pokémon kampfunfähig."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Corner",
				'fr-fr': "Coinçage",
				'es-es': "Arrinconar",
				'it-it': "Trappola",
				'pt-br': "Quina",
				'de-de': "Bedrängen"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 100,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Its shell is overflowing with its heightened otherworldly energy. The ectoplasm serves as protection for this Pokémon's core spirit."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457813,
				tcgplayer: 213165
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457813,
				tcgplayer: 213165
			}
		},
	],
}

export default card
