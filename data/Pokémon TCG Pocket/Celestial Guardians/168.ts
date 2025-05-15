import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Comfey",
		fr: "Guérilande",
		es: "Comfey",
		it: "Comfey",
		de: "Curelei",
		'pt-br': "Comfey",
		ko: "큐아링"
	},

	illustrator: "mashu",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Comfey picks flowers with its vine and decorates itself with them. For some reason, flowers won't wither once they're attached to a Comfey.",
		fr: "Il orne son corps de fleurs qu'il cueille avec sa liane.\nMystérieusement, celles-ci ne se fanent jamais.",
		es: "Prende flores en su tallo para decorar su propio\ncuerpo y, misteriosamente, no se marchitan nunca.",
		it: "Coglie fiori con la sua liana e li usa per decorare il proprio corpo.\nNon si sa come mai, ma i fiori che ha addosso non appassiscono.",
		de: "Mit seiner Ranke pflückt es Blumen und schmückt\ndann seinen Körper mit ihnen. Aus irgendeinem\nGrund verwelken diese nie.",
		'pt-br': "Este Pokémon colhe flores com suas vinhas e se enfeita\ncom elas. Por alguma razão, as flores não murcham\ndepois de terem sido colocadas em Comfey.",
		ko: "덩굴을 사용해 꽃을 따서 자신을\n꾸민다. 몸에 붙은 꽃은 무슨\n이유에서인지 시들지 않는다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flower Shield",
			fr: "Garde Florale",
			es: "Defensa Floral",
			it: "Fiordifesa",
			de: "Floraschutz",
			'pt-br': "Escudo Florido",
			ko: "플라워가드"
		},

		effect: {
			en: "Each of your Pokémon that has any {P} Energy attached recovers from all Special Conditions and can't be affected by any Special Conditions.",
			fr: "Chacun de vos Pokémon auquel de l'Énergie {P} est attachée guérit de tous les États Spéciaux et ne peut être affecté par aucun État Spécial.",
			es: "Cada uno de tus Pokémon que tenga alguna Energía {P} unida a él se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
			it: "Ciascuno dei tuoi Pokémon che ha delle Energie {P} assegnate guarisce da tutte le condizioni speciali e non può essere influenzato da condizioni speciali.",
			de: "Jedes deiner Pokémon, an das mindestens 1 {P}-Energie angelegt ist, erholt sich von allen Speziellen Zuständen und kann von keinen Speziellen Zuständen betroffen werden.",
			'pt-br': "Cada um dos seus Pokémon que tiver alguma Energia {P} ligada a ele se recupera de todas as Condições Especiais e não pode ser afetado por quaisquer Condições Especiais.",
			ko: "이 포켓몬이 있는 한, {P}에너지가 붙어 있는 자신의 포켓몬 전원은 특수 상태가 되지 않으며 받고 있는 특수 상태는 모두 회복."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			de: "Rundumangriff",
			'pt-br': "Ataque Giratório",
			ko: "회전어택"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
