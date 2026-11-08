import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [157],
	set: Set,

	name: {
		'en-us': "Hisuian Typhlosion VSTAR",
		'fr-fr': "Typhlosion de Hisui VSTAR",
		'es-es': "Typhlosion de Hisui V-ASTRO",
		'it-it': "Typhlosion di Hisui V ASTRO",
		'pt-br': "Typhlosion de Hisui V-ASTRO",
		'de-de': "Hisui-Tornupto VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Hisuian Typhlosion V",
		'fr-fr': "Typhlosion de Hisui-V",
		'es-es': "Typhlosion de Hisui V",
		'it-it': "Typhlosion di Hisui-V",
		'pt-br': "Typhlosion de Hisui V",
		'de-de': "Hisui-Tornupto-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Hollow Flame",
			'fr-fr': "Flamme Creuse",
			'es-es': "Llama Hueca",
			'it-it': "Fiamma Vacua",
			'pt-br': "Chama Vazia",
			'de-de': "Heimsuchende Flamme"
		},

		effect: {
			'en-us': "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'it-it': "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 180
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Shimmering Star",
			'fr-fr': "Miroitement Star",
			'es-es': "Astro Resplandeciente",
			'it-it': "Astro Luccicante",
			'pt-br': "Miragem Astral",
			'de-de': "Flimmernder Stern"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has exactly 4 damage counters on it, that Pokémon is Knocked Out. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a exactement 4 marqueurs de dégâts, il est mis K.O. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Si el Pokémon Activo de tu rival tiene exactamente 4 contadores de daño sobre él, ese Pokémon queda Fuera de Combate. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Se il Pokémon attivo del tuo avversario ha esattamente quattro segnalini danno, quel Pokémon viene messo KO. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver exatamente 4 contadores de dano nele, aquele Pokémon será Nocauteado (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners genau 4 Schadensmarken liegen, ist jenes Pokémon kampfunfähig. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 658854,
				tcgplayer: 272447
			}
		},
	],
}

export default card
