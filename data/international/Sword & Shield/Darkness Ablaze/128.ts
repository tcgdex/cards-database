import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Galarian Stunfisk V",
		'fr-fr': "Limonde de Galar V",
		'es-es': "Stunfisk V de Galar",
		'it-it': "Stunfisk di Galar V",
		'pt-br': "Stunfisk de Galar V",
		'de-de': "Galar-Flunschlik V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [618],
	set: Set,
	hp: 200,

	types: [
		"Metal",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Metal Skin",
				'fr-fr': "Peau Métal",
				'es-es': "Piel Metálica",
				'it-it': "Metalpelle",
				'pt-br': "Pele Metálica",
				'de-de': "Metallhaut"
			},
			effect: {
				'en-us': "This Pokémon gets +20 HP for each Metal Energy attached to it.",
				'fr-fr': "Chaque Énergie Metal attachée à ce Pokémon lui ajoute 20 PV.",
				'es-es': "Este Pokémon obtiene 20 PS más por cada Energía Metal unida a él.",
				'it-it': "Questo Pokémon ha 20 PS in più per ogni Energia Metal a esso assegnata.",
				'pt-br': "Este Pokémon recebe 20 PS a mais para cada Energia Metal ligada a ele.",
				'de-de': "Dieses Pokémon erhält für jede an es angelegte Metal-Energie +20 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trapping Bite",
				'fr-fr': "Piège Mordant",
				'es-es': "Mordisco Trampa",
				'it-it': "Morso Trappola",
				'pt-br': "Arapuca Mordedora",
				'de-de': "Fangbiss"
			},
			effect: {
				'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 12 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 12 contadores de daño en el Pokémon Atacante.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti 12 segnalini danno sul Pokémon attaccante.",
				'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 12 contadores de dano no Pokémon Atacante.",
				'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 12 Schadensmarken auf das Angreifende Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483519,
				tcgplayer: 219389
			}
		},
	],
}

export default card
