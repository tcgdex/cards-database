import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Blastoise",
         ja: "ダークブラストワイズ",
         fr: "Blastoise sombre",
         de: "Dunkler Blastoise",
         es: "Blastoise oscuro",
         it: "Blastoise scuro",
         pt: "Blastoise escura",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [9],
      hp: 70,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Hydrocannon",
            ja: "ハイドロキャノン",
            fr: "Canon hydro",
            de: "Hydro -Kanone",
            es: "Cañón hidroeléctrico",
            it: "Hydro Cannon",
            pt: "Canhão hidrelétrico",
          },
          effect: {
            en: "Does 30 damage plus 20 more damage for each Water Energy attached to Dark Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
            ja: "30のダメージに加えて、ダークブラストワーズに付着した水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 20 dégâts supplémentaires pour chaque énergie d'eau attachée à la blastoise noire mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 20 weitere Schäden für jede Wasserergie, die an dunklen Blastoise angebracht ist, aber nicht zur Bezahlung der Energiekosten dieses Angriffs verwendet wird. Auf diese Weise können Sie nicht mehr als 40 Schäden hinzufügen.",
            es: "Hace 30 daños más 20 más de daño por cada energía de agua unida a Dark Blastoise pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 40 daños de esta manera.",
            it: "Fa 30 danni più 20 danni in più per ogni energia idrica attaccata al blastoise scuro ma non utilizzata per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 40 danni in questo modo.",
            pt: "Causam 30 danos mais 20 mais danos a cada energia da água anexada a Blastoise escura, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 40 danos dessa maneira.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Rocket Tackle",
            ja: "ロケットタックル",
            fr: "Tacle de fusée",
            de: "Raketenangriff",
            es: "Aparejo de cohete",
            it: "Attrezzatura del razzo",
            pt: "Tackle foguete",
          },
          effect: {
            en: "Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent's next turn. (Any other effects of attacks still happen.)",
            ja: "Dark Blastoiseはそれ自体に10ダメージを与えます。コインをひっくり返します。頭の場合は、相手の次のターン中に暗い爆風に与えられたすべてのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Dark Blastoise fait 10 dégâts à lui-même. Retourner une pièce. Si les têtes, empêchent tous les dégâts causés à la blastoise sombre lors du prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
            de: "Dark Blastoise schädigt sich 10. Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden an dunklen Blasten während der nächsten Kurve Ihres Gegners. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Dark Blastoise hace 10 daños a sí mismo. Voltea una moneda. Si se dirige, evite todo el daño hecho a Dark Blastoise durante el próximo turno de tu oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Dark Blastoise fa 10 danni a se stesso. Capovolgi una moneta. Se le teste, impediscono tutti i danni fatti al blastoise oscuro durante il prossimo turno dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Dark Blastoise causa 10 danos a si mesmo. Vire uma moeda. Se as cabeças, impedem todos os danos causados a Blastoise escura durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
          damage: 40,
        },
      ],

      retreat: 2,

};
