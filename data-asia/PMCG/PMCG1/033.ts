import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Poliwrath",
		ja: "Poliwrath",
		fr: "Poliwrath",
		de: "Poliwrath",
		es: "Poliwrath",
		it: "Poliwrath",
		pt: "Poliwrath",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [62],
	hp: 90,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				en: "Water Gun",
				ja: "ウォーターガン",
				fr: "Pistolet à eau",
				de: "Wasserpistole",
				es: "Pistola de agua",
				it: "Pistola ad acqua",
				pt: "Pistola de água",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				ja: "PoliWrathに付着した水エネルギーごとに30のダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
				fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Poliwrath, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
				de: "Fügt 30 Schäden plus 10 weitere Schäden für jede an Poliwrath verbundene Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
				es: "Hace 30 daños más 10 daños más por cada energía de agua unida a Poliwrath pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
				it: "Fa 30 danni più 10 danni per ogni energia idrica attaccata a Poliwrath ma non è usata per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
				pt: "Os 30 danos mais 10 mais danos para cada energia da água ligados a Poliwrath, mas não costumavam pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
			},

		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				en: "Whirlpool",
				ja: "渦",
				fr: "Tourbillon",
				de: "Whirlpool",
				es: "Torbellino",
				it: "Whirlpool",
				pt: "Hidromassagem",
			},
			effect: {
				en: "If the Defending Pokemon has any Energy cards attached to it, choose 1 of them and discard it.",
				ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
				fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, choisissez-y 1 et jetez-la.",
				de: "Wenn das verteidigende Pokémon an Energiekarten verbunden ist, wählen Sie 1 davon und verwerfen Sie es.",
				es: "Si el Pokémon defensor tiene alguna tarjetas de energía unidas, elija 1 de ellas y deséchela.",
				it: "Se il Pokemon in difesa ha delle carte energetiche ad esso collegate, scegli 1 e scartalo.",
				pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, escolha 1 deles e descarte -o.",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
