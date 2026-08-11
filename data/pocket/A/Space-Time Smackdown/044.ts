import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		de: "Shnebedeck",
		'pt-br': "Snover",
		ko: "눈쓰개"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [459],
	hp: 70,
	types: ["Water"],

	description: {
		en: "During cold seasons, it migrates to the mountain's lower reaches. It returns to the snow-covered summit in the spring.",
		fr: "Il s'aventure jusqu'au pied des montagnes en hiver,\nmais se réfugie sur les pics neigeux au printemps.",
		es: "En las estaciones frías baja al pie de la montaña,\npero regresa a las cimas nevadas en primavera.",
		it: "In inverno scende fino ai piedi delle\nmontagne, ma in primavera se ne torna\nsulle cime montuose dove c'è ancora neve.",
		de: "In der kalten Jahreszeit steigt es bis zum Fuß\nder Berge hinab. Im Frühjahr kehrt es auf die\nGipfel zurück, wo noch Schnee liegt.",
		'pt-br': "Durante as temporadas frias, migra para as partes baixas\nda montanha. Na primavera, retorna para o cume nevado.",
		ko: "추운 계절에는 산기슭까지\n내려오지만 봄이 되면\n눈이 남아 있는 산 정상으로 돌아간다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ice Shard",
			fr: "Éclats Glace",
			es: "Esquirla Helada",
			it: "Geloscheggia",
			de: "Eissplitter",
			'pt-br': "Caco de Gelo",
			ko: "얼음뭉치"
		},

		damage: "10+",
		cost: ["Water"],

		effect: {
			en: "If your opponent's Active Pokémon is a {F} Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {F}, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {F}, este ataque hace 30 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon {F}, questo attacco infligge 30 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners ein {F}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {F}, este ataque causará 30 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 {F}포켓몬이라면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga", "palkia"]
}

export default card
