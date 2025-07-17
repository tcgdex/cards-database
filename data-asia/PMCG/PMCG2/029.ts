import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Cubone",
         ja: "キューボン",
         fr: "Cubone",
         de: "Cubone",
         es: "Cuboo",
         it: "Cubone",
         pt: "Cubone",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [104],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Snivel",
            ja: "スニベル",
            fr: "Pleurnicher",
            de: "Schniefen",
            es: "Lloriquear",
            it: "Rianimello",
            pt: "Snive",
          },
          effect: {
            en: "If the Defending Pokemon attacks Cubone during your opponent's next turn, any damage done by the attack is reduced by 20 (after applying Weakness and Resistance). (Benching either Pokemon ends this effect.)",
            ja: "防御するポケモンが相手の次のターン中にキューボンを攻撃する場合、攻撃によって与えられた損害は20（脱力感と抵抗を適用した後）に20増加します。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
            fr: "Si le Pokémon en défense attaque Cubone lors du prochain tour de votre adversaire, tout dommage causé par l'attaque est réduit de 20 (après avoir appliqué une faiblesse et une résistance). (Benching soit Pokémon termine cet effet.)",
            de: "Wenn der verteidigende Pokemon Cubone während der nächsten Runde Ihres Gegners angreift, wird jeder durch den Angriff verursachte Schaden um 20 reduziert (nach Auftragen von Schwäche und Widerstand). (BENCHING BEEDE POKEON ENDEN diesen Effekt.)",
            es: "Si el Pokémon defensor ataca a Cubone durante el próximo turno de tu oponente, cualquier daño causado por el ataque se reduce en 20 (después de aplicar debilidad y resistencia). (Benching O Pokemon termina este efecto).",
            it: "Se il Pokemon difensore attacca Cubone durante il prossimo turno dell'avversario, qualsiasi danno causato dall'attacco viene ridotto di 20 (dopo aver applicato la debolezza e la resistenza). (Benching uno dei pokemon termina questo effetto.)",
            pt: "Se o pokemon atual atacar Cubone durante o próximo turno do seu oponente, qualquer dano causado pelo ataque será reduzido em 20 (após aplicar fraqueza e resistência). (Becada de Pokemon termina esse efeito.)",
          },

        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each damage counter on Cubone.",
            ja: "キューボンの各ダメージカウンターで10ダメージに加えて10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Cubone.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Cubone.",
            es: "Hace 10 daños más 10 10 más de daño por cada mostrador de daño en Cubone.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Cubone.",
            pt: "10 danos mais 10 mais danos para cada contador de danos em Cubone.",
          },

        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
