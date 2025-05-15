import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Giratina ex",
		fr: "Giratina-ex",
		es: "Giratina ex",
		it: "Giratina-ex",
		de: "Giratina-ex",
		'pt-br': "Giratina ex",
		ko: "기라티나 ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Broken-Space Bellow",
			fr: "Cri Espace-Brisé",
			es: "Bramido de Espacio Fracturado",
			it: "Ruggito Altera-spazio",
			de: "Raumzerfetzender Schrei",
			'pt-br': "Grito do Espaço Rompido",
			ko: "파공의 외침"
		},

		effect: {
			en: "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to this Pokémon. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre zone Énergie et l'attacher à ce Pokémon. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes unir 1 Energía {P} de tu área de Energía a este Pokémon. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {P} dalla tua Zona Energia e assegnarla a questo Pokémon. Se usi questa abilità, il tuo turno finisce.",
			de: "Einmal während deines Zuges kannst du 1 {P}-Energie aus deinem Energiebereich an dieses Pokémon anlegen. Wenn du diese Fähigkeit einsetzt, endet dein Zug.",
			'pt-br': "Uma vez durante o seu turno, você poderá pegar Energia da sua Zona de Energia e a este Pokémon. Se você usar esta Habilidade, o seu turno acabará.",
			ko: "자신의 차례에 1번 사용할 수 있으며, 사용하면 차례는 끝난다. 자신의 에너지존에서 {P}에너지를 1개 내보내 이 포켓몬에게 붙인다.",
			'pt-br': "Uma vez durante o seu turno, você poderá pegar 1 Energia da sua Zona de Energia e a este Pokémon. Se você usar esta Habilidade, o seu turno acabará.",
			'pt-br': "Uma vez durante o seu turno, você poderá pegar 1 Energia {P} da sua Zona de Energia e a este Pokémon. Se você usar esta Habilidade, o seu turno acabará."
		}
	}],

	attacks: [{
		name: {
			en: "Chaotic Impact",
			fr: "Impact du Chaos",
			es: "Impacto Caótico",
			it: "Impatto Caotico",
			de: "Chaoseinschlag",
			'pt-br': "Impacto Caótico",
			ko: "카오스임팩트"
		},

		damage: 130,
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card
