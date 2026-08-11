import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		'en-us': "Mawile VSTAR",
		'fr-fr': "Mysdibule VSTAR",
		'es-es': "Mawile V-ASTRO",
		'it-it': "Mawile V ASTRO",
		'pt-br': "Mawile V-ASTRO",
		'de-de': "Flunkifer VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Mawile V",
		'fr-fr': "Mysdibule-V",
		'es-es': "Mawile V",
		'it-it': "Mawile-V",
		'pt-br': "Mawile V",
		'de-de': "Flunkifer-V"
	},

	stage: "VSTAR",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Star Rondo",
			'fr-fr': "Rondo Star",
			'es-es': "Rondó Astro",
			'it-it': "Astro Rondò",
			'pt-br': "Cântico Astral",
			'de-de': "Sternenrondo"
		},

		effect: {
			'en-us': "During your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon. If you do, switch 1 of your opponent's Benched Pokémon with their Active Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez l'échanger contre votre Pokémon Actif. Dans ce cas, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo. Si lo haces, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Durante o seu turno, se este Pokémon estiver no seu Banco, você poderá trocá-lo pelo seu Pokémon Ativo. Se fizer isto, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a) (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Sudden Eater",
			'fr-fr': "Mangeur Impulsif",
			'es-es': "Hambre Súbita",
			'it-it': "Fame Improvvisa",
			'pt-br': "Comilão Intempestivo",
			'de-de': "Plötzlicher Appetit"
		},

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 682248,
				tcgplayer: 451991
			}
		},
	],
}

export default card
