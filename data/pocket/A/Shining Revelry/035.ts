import { Card } from "models/database/card"
import Set from "../Shining Revelry"
const card: Card = {
	set: Set,
	name: {
		'en-us': "Giratina ex",
		'fr-fr': "Giratina-ex",
		'es-es': "Giratina ex",
		'it-it': "Giratina-ex",
		'de-de': "Giratina-ex",
		'ko-kr': "기라티나 ex",
		'pt-br': "Giratina ex"
	},
	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [487],
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",
	abilities: [{
		type: "Ability",
		name: {
			'en-us': "Broken-Space Bellow",
			'fr-fr': "Cri Espace-Brisé",
			'es-es': "Bramido de Espacio Fracturado",
			'it-it': "Ruggito Altera-spazio",
			'de-de': "Raumzerfetzender Schrei",
			'ko-kr': "파공의 외침",
			'pt-br': "Grito do Espaço Rompido"
		},
		effect: {
			'en-us': "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to this Pokémon. If you use this Ability, your turn ends.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre zone Énergie et l'attacher à ce Pokémon. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Una vez durante tu turno, puedes unir 1 Energía {P} de tu área de Energía a este Pokémon. Si usas esta habilidad, tu turno termina.",
			'it-it': "Una sola volta durante il tuo turno, puoi prendere un'Energia {P} dalla tua Zona Energia e assegnarla a questo Pokémon. Se usi questa abilità, il tuo turno finisce.",
			'de-de': "Einmal während deines Zuges kannst du 1 {P}-Energie aus deinem Energiebereich an dieses Pokémon anlegen. Wenn du diese Fähigkeit einsetzt, endet dein Zug.",
			'ko-kr': "자신의 차례에 1번 사용할 수 있으며, 사용하면 차례는 끝난다. 자신의 에너지존에서 {P}에너지를 1개 내보내 이 포켓몬에게 붙인다.",
			'pt-br': "Uma vez durante o seu turno, você poderá pegar 1 Energia {P} da sua Zona de Energia e a este Pokémon. Se você usar esta Habilidade, o seu turno acabará."
		}
	}],
	attacks: [{
		name: {
			'en-us': "Chaotic Impact",
			'fr-fr': "Impact du Chaos",
			'es-es': "Impacto Caótico",
			'it-it': "Impatto Caotico",
			'de-de': "Chaoseinschlag",
			'ko-kr': "카오스임팩트",
			'pt-br': "Impacto Caótico"
		},
		damage: 130,
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],
		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'ko-kr': "이 포켓몬에게도 20데미지를 준다."
		}
	}],
	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],
	retreat: 2
}
export default card