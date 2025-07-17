import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Psyduck",
         ja: "MistyのPsyduck",
         fr: "Psyduck de Misty",
         de: "Mistys Psyduck",
         es: "Psyduck de Misty",
         it: "Misty's Psyduck",
         pt: "Psyduck de Misty",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "ESP",
            ja: "特に",
            fr: "En particulier",
            de: "Esp",
            es: "Espíritu",
            it: "Esp",
            pt: "Esp",
          },
          effect: {
            en: "Flip 3 coins. If exactly 1 is heads, draw a card. If exactly 2 are heads, this attack does 20 damage. If all 3 are heads, choose 1 of the Defending Pokemon's attacks. Misty's Psyduck copies that attack except for its Energy costs. (No matter what type the Defending Pokemon is, Misty's Psyduck's type is still Water.)",
            ja: "3コインをフリップします。正確に1がヘッドの場合は、カードを描きます。正確に2がヘッドの場合、この攻撃は20のダメージを与えます。 3つすべてがヘッドの場合は、防御ポケモンの攻撃の1つを選択します。 MistyのPsyduckは、そのエネルギーコストを除いて攻撃するコピーをコピーします。 （ディフェンディングポケモンがどんなタイプであっても、MistyのPsyduckのタイプはまだ水です。）",
            fr: "Flip 3 pièces. Si exactement 1 est la tête, tracez une carte. Si exactement 2 sont des têtes, cette attaque fait 20 dégâts. Si les 3 sont les têtes, choisissez 1 des attaques de Pokémon en défense. Les copies de Psyduck de Misty qui attaquent, à l'exception de ses coûts énergétiques. (Peu importe le type que le Pokémon en défense, le type de Psyduck de Misty est toujours de l'eau.)",
            de: "3 Münzen umdrehen. Wenn genau 1 Köpfe ist, zeichnen Sie eine Karte. Wenn genau 2 Köpfe sind, verursacht dieser Angriff 20 Schaden. Wenn alle 3 Köpfe sind, wählen Sie 1 der Angriffe des verteidigenden Pokemons. Mistys Psyduck kopiert, die mit Ausnahme der Energiekosten angreifen. (Unabhängig davon, welches Typ das verteidigende Pokemon ist, ist Mistys Psyducks Typ immer noch Wasser.)",
            es: "Flip 3 monedas. Si exactamente 1 es cabezas, dibuje una tarjeta. Si exactamente 2 son cabezas, este ataque hace 20 daños. Si los 3 son cabezas, elija 1 de los ataques de Pokémon defensores. Psyduck de Misty copia ese ataque, excepto por sus costos de energía. (No importa qué tipo sea el Pokémon defensor, el tipo de Psyduck de Misty sigue siendo agua).",
            it: "Flip 3 monete. Se esattamente 1 è la testa, disegna una carta. Se esattamente 2 sono teste, questo attacco fa 20 danni. Se tutti e 3 sono teste, scegli 1 degli attacchi di Pokemon in carica. Psyduck di Misty copie che attaccano tranne i suoi costi energetici. (Non importa quale tipo sia il Pokemon in carica, il tipo di Psyduck di Misty è ancora acqua.)",
            pt: "Flip 3 moedas. Se exatamente 1 estiver cabeças, desenhe uma carta. Se exatamente 2 são cabeças, esse ataque causará 20 danos. Se todos os três forem cabeças, escolha 1 dos ataques de Pokemon. O Psyduck de Misty cópias que atacam, exceto por seus custos de energia. (Não importa o tipo que seja o Pokémon atual, o tipo de Psyduck de Misty ainda é água.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
