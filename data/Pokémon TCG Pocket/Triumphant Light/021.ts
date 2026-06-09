import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		de: "Rexblisar",
		'pt-br': "Abomasnow",
		ko: "눈설왕"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [460],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Snover"
	},

	description: {
		en: "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
		fr: "Il vit paisiblement dans les massifs où s'amoncellent les neiges\néternelles, et il déclenche des blizzards pour se cacher.",
		es: "Vive en paz en cordilleras de nieves eternas.\nGenera ventiscas para ocultarse.",
		it: "Vive nella pace delle cime montuose tra le nevi\nperenni. Si nasconde scatenando bufere di neve.",
		de: "Es führt ein ruhiges Leben im Gebirge, wo\newiger Schnee liegt, und löst Blizzards aus,\num sich zu verstecken.",
		'pt-br': "Leva uma vida tranquila em montanhas que estão\npermanentemente cobertas de neve. Ele se esconde\nprovocando nevascas.",
		ko: "만년설이 쌓인 산맥에서 조용히 지낸다.\n블리자드를 발생시켜 모습을 감춘다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vigor Link",
			fr: "Lien Vigueur",
			es: "Vínculo Apremiante",
			it: "Vigore Simbiotico",
			de: "Vitalkopplung",
			'pt-br': "Elo de Vigor",
			ko: "허슬 링크"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, attacks used by this Pokémon cost 1 less {C} Energy.",
			fr: "Si vous avez Arceus ou Arceus-ex en jeu, les attaques utilisées par ce Pokémon coûtent une Énergie {C} de moins.",
			es: "Si tienes a Arceus o Arceus ex en juego, los ataques de este Pokémon cuestan 1 Energía {C} menos.",
			it: "Se hai in gioco Arceus o Arceus-ex, il costo degli attacchi usati da questo Pokémon è ridotto di un'Energia {C}.",
			de: "Wenn du Arceus oder Arceus-ex im Spiel hast, verringern sich die Kosten der von diesem Pokémon eingesetzten Attacken um 1 {C}-Energie.",
			'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, os ataques usados por este Pokémon custarão 1 Energia {C} a menos.",
			ko: "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」 있다면 이 포켓몬이 기술을 사용하기 위한 에너지를 {C}에너지 1개만큼 적게 만든다."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			de: "Megahieb",
			'pt-br': "Megassoco",
			ko: "메가톤펀치"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card
