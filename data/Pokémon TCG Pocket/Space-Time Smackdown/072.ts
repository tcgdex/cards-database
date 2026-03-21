import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		de: "Zwirrfinst",
		'pt-br': "Dusknoir",
		ko: "야느와르몽"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [477],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dusclops"
	},

	description: {
		en: "At the bidding of transmissions from the spirit world, it steals people and Pokémon away. No one knows whether it has a will of its own.",
		fr: "Nul ne sait s'il est doté d'une volonté propre.\nLes ondes du monde des esprits le poussent\nà conduire humains et Pokémon vers l'au-delà.",
		es: "Se desconoce si posee voluntad propia. Capta ondas de otra\ndimensión que le incitan a llevarse allí a humanos y Pokémon.",
		it: "Non si sa se abbia una volontà propria.\nSegue le onde che provengono dal mondo\ndegli spiriti e vi conduce persone e Pokémon.",
		de: "Niemand weiß, ob es einen eigenen Willen hat.\nÜber Radiowellen empfängt es Befehle aus dem\nJenseits, Menschen und Pokémon zu entführen.",
		'pt-br': "Atendendo a pedidos do mundo espiritual, leva embora\npessoas e outros Pokémon. Ninguém sabe se possui\nvontade própria.",
		ko: "의지가 있는 것인지 알 수 없다.\n영계로부터의 전파에 따라\n사람이나 포켓몬을 데리고 간다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shadow Void",
			fr: "Crevasse d'Ombre",
			es: "Brecha Sombra",
			it: "Vuotoscuro",
			de: "Dunkles Nichts",
			'pt-br': "Vácuo Sombrio",
			ko: "섀도홀"
		},

		effect: {
			en: "As often as you like during your turn, you may choose 1 of your Pokémon that has damage on it, and move all of its damage to this Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez choisir un de vos Pokémon qui a subi des dégâts et déplacer ses dégâts vers ce Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes elegir 1 de tus Pokémon que ya tenga daño y mover todo su daño a este Pokémon.",
			it: "Durante il tuo turno, puoi scegliere uno dei tuoi Pokémon danneggiati e spostare tutti i suoi danni su questo Pokémon tutte le volte che vuoi.",
			de: "Beliebig oft während deines Zuges kannst du 1 deiner Pokémon wählen, dem bereits Schaden zugefügt wurde, und seinen gesamten Schaden auf dieses Pokémon verschieben.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá escolher 1 dos seus Pokémon que estiver danificado e mover todo o dano dele a este Pokémon.",
			ko: "자신의 차례에 몇 번이라도 사용할 수 있다. 데미지를 받고 있는 자신의 포켓몬을 1마리 선택해서 선택한 포켓몬이 받고 있는 데미지를 모두 이 포켓몬에게 옮긴다."
		}
	}],

	attacks: [{
		name: {
			en: "Devour Soul",
			fr: "Dévoreur d'Âmes",
			es: "Devorar Almas",
			it: "Divoranima",
			de: "Seelenverschlinger",
			'pt-br': "Devorador de Almas",
			ko: "소울이트"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
