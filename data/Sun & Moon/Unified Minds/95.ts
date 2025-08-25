import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Durable Blade",
				fr: "Lame Résistante",
				es: "Cuchilla Resistente",
				it: "Lama Eterna",
				pt: "Lâmina Duradoura",
				de: "Beständige Klinge"
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an opponent’s attack, put it into your hand instead of the discard pile. (Discard all cards attached to it.)",
				fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, placez-le dans votre main plutôt que dans votre pile de défausse. (Défaussez toutes les cartes qui lui sont attachées.)",
				es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de tu rival, ponlo en tu mano en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
				it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco dell’avversario, aggiungilo alle carte che hai in mano invece che alla pila degli scarti. Scarta tutte le carte a esso assegnate.",
				pt: "Se este Pokémon for Nocauteado pelo dano do ataque de um oponente, coloque-o na sua mão ao invés de colocá-lo na pilha de descarte (descarte todas as cartas ligadas a ele).",
				de: "Wenn dieses Pokémon durch Schaden einer Attacke deines Gegners kampfunfähig wird, lege es nicht auf deinen Ablagestapel, sondern nimm es auf deine Hand. (Lege alle an es angelegten Karten auf deinen Ablagestapel.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trash Slash",
				fr: "Déchets Déchiquetés",
				es: "Cuchillada Basura",
				it: "Lacerascarto",
				pt: "Talho de Lixo",
				de: "Müllstich"
			},
			effect: {
				en: "This attack does 10 damage for each Item card in your discard pile. You can’t do more than 130 damage in this way.",
				fr: "Cette attaque inflige 10 dégâts pour chaque carte Objet dans votre pile de défausse. Vous ne pouvez pas infliger plus de 130 dégâts de cette façon.",
				es: "Este ataque hace 10 puntos de daño por cada carta de Objeto en tu pila de descartes. No puedes hacer más de 130 puntos de daño de esta manera.",
				it: "Questo attacco infligge 10 danni per ogni carta Strumento nella tua pila degli scarti. Non puoi infliggere più di 130 danni in questo modo.",
				pt: "Este ataque causa 10 pontos de dano para cada carta de Item na sua pilha de descarte. Você não pode causar mais de 130 pontos de dano desta forma.",
				de: "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Itemkarten in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 130 Schadenspunkte zufügen."
			},
			damage: "10×",

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
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 388282,
		tcgplayer: 195027
	}
}

export default card
