import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon ex",
		fr: "Phyllali-ex",
		es: "Leafeon ex",
		it: "Leafeon-ex",
		de: "Folipurba-ex",
		'pt-br': "Leafeon ex",
		ko: "리피아 ex"
	},

	illustrator: "saino misaki",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Forest Breath",
			fr: "Souffle Forestier",
			es: "Aliento del Bosque",
			it: "Forestasoffio",
			de: "Waldatem",
			'pt-br': "Hálito da Floresta",
			ko: "숲의 숨결"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may take a {G} Energy from your Energy Zone and attach it to 1 of your {G} Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez prendre une Énergie {G} de votre zone Énergie et l'attacher à l'un de vos Pokémon {G}.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes unir 1 Energía {G} de tu área de Energía a uno de tus Pokémon {G}.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi prendere un'Energia {G} dalla tua Zona Energia e assegnarla a uno dei tuoi Pokémon {G}.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 {G}-Energie aus deinem Energiebereich an 1 deiner {G}-Pokémon anlegen.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá pegar 1 Energia {G} da sua Zona de Energia e ligá-la a 1 dos seus Pokémon {G}.",
			ko: "이 포켓몬이 배틀필드에 있다면 자신의 차례에 1번 사용할 수 있다. 자신의 에너지존에서 {G}에너지를 1개 내보내 {G}포켓몬에게 붙인다."
		}
	}],

	attacks: [{
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			de: "Solarstrahl",
			'pt-br': "Raio Solar",
			ko: "솔라빔"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
