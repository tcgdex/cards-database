import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Volbeat",
         ja: "volbeat",
         fr: "Volbeat",
         de: "Volbeat",
         es: "Volbeat",
         it: "Volbeat",
         pt: "Volbeat",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [313],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Uplifting Glow",
            ja: "高揚する輝き",
            fr: "Lueur édifiante",
            de: "Erhebendes Glühen",
            es: "Brillo edificante",
            it: "Glow edificante",
            pt: "Brilho edificante",
          },
          effect: {
            en: "As long as Illumise is in play, Volbeat's Retreat Cost is 0.",
            ja: "Illumiseが再生されている限り、Volbeatのリトリートコストは0です。",
            fr: "Tant qu'il est en jeu, le coût de retraite de Volbeat est de 0.",
            de: "Solange Illumise im Spiel ist, betragen die Rückzugskosten von Volbeat 0.",
            es: "Mientras Illumise esté en juego, el costo de retirada de Volbeat es 0.",
            it: "Finché l'Illumise è in gioco, il costo di ritiro di Volbeat è 0.",
            pt: "Enquanto o Illumise estiver em jogo, o custo do retiro de Volbeat for 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Toxic Vibration",
            ja: "有毒な振動",
            fr: "Vibration toxique",
            de: "Toxische Schwingung",
            es: "Vibración tóxica",
            it: "Vibrazione tossica",
            pt: "Vibração tóxica",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.  If tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。  尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.  Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.  Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.  Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.  Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.  Se as caudas, o pokemon defensor agora está dormindo.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Pester",
            ja: "ペスター",
            fr: "Harceler",
            de: "Belästigen",
            es: "Molestar",
            it: "Tormentare",
            pt: "Pester",
          },
          effect: {
            en: "If the Defending Pokemon is affected by a Special Condition, this attack does 20 damage plus 20 more damage.",
            ja: "防御ポケモンが特別な状態の影響を受ける場合、この攻撃は20のダメージと20のダメージを与えます。",
            fr: "Si le Pokémon en défense est affecté par une condition spéciale, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon von einem besonderen Zustand betroffen ist, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor se ve afectado por una condición especial, este ataque hace 20 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è influenzato da una condizione speciale, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o pokemon atual for afetado por uma condição especial, esse ataque causará 20 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
