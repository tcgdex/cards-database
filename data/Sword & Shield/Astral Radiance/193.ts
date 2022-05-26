import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Typhlosion VSTAR",
		fr: "Typhlosion de Hisui VSTAR",
		es: "Typhlosion de Hisui V-ASTRO",
		it: "Typhlosion di Hisui V ASTRO",
		pt: "Typhlosion de Hisui V-ASTRO",
		de: "Hisui-Tornupto VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	evolveFrom: {
		en: "Hisuian Typhlosion V",
		fr: "Typhlosion de Hisui-V",
		es: "Typhlosion de Hisui V",
		it: "Typhlosion di Hisui-V",
		pt: "Typhlosion de Hisui V",
		de: "Hisui-Tornupto-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Hollow Flame",
			fr: "Flamme Creuse",
			es: "Llama Hueca",
			it: "Fiamma Vacua",
			pt: "Chama Vazia",
			de: "Heimsuchende Flamme"
		},

		effect: {
			en: "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			es: "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			it: "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			pt: "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			de: "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 180
	}, {
		cost: ["Psychic"],

		name: {
			en: "Shimmering Star",
			fr: "Miroitement Star",
			es: "Astro Resplandeciente",
			it: "Astro Luccicante",
			pt: "Miragem Astral",
			de: "Flimmernder Stern"
		},

		effect: {
			en: "If your opponent's Active Pokémon has exactly 4 damage counters on it, that Pokémon is Knocked Out. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire a exactement 4 marqueurs de dégâts, il est mis K.O. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Si el Pokémon Activo de tu rival tiene exactamente 4 contadores de daño sobre él, ese Pokémon queda Fuera de Combate. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Se il Pokémon attivo del tuo avversario ha esattamente quattro segnalini danno, quel Pokémon viene messo KO. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Se o Pokémon Ativo do seu oponente tiver exatamente 4 contadores de dano nele, aquele Pokémon será Nocauteado (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners genau 4 Schadensmarken liegen, ist jenes Pokémon kampfunfähig. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card