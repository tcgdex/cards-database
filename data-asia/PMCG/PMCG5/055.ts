import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Rhydon",
         ja: "ブロックのライドン",
         fr: "Rhydon de Brock",
         de: "Brocks Rhydon",
         es: "Rhydon de Brock",
         it: "Rhydon di Brock",
         pt: "Rhydon de Brock",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [112],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Bench Guard",
            ja: "ベンチガード",
            fr: "Gardien de référence",
            de: "Bankwache",
            es: "Guardia",
            it: "Guardia da banco",
            pt: "Guarda de bancada",
          },
          effect: {
            en: "As long as Brock's Rhydon is Benched, whenever 1 of your Benched Pokmon is damaged, you may do 10 of that damage to Brock's Rhydon instead. <em>(If more than 1 of your Benched Pokmon is damaged at the same time, you may use this power once for each of them.)</em>",
            ja: "BrockのRhydonがベンチに入れられている限り、ベンチに入ったPokmonが損傷したときはいつでも、代わりにBrockのRhydonにそのダメージを10回することがあります。 <em>（ベンチ付きポクモンの2つ以上が同時に破損している場合、それらのそれぞれに対してこのパワーを1回使用できます。）</em>",
            fr: "Tant que le rhydon de Brock est banc, chaque fois qu'un de votre pokmon bancté est endommagé, vous pouvez plutôt faire 10 de ces dégâts à Rhydon de Brock. <em> (Si plus de 1 de votre pokmon banc est endommagé en même temps, vous pouvez utiliser ce pouvoir une fois pour chacun d'eux.) </em>",
            de: "Solange Brocks Rhydon auf die Bank gesetzt ist, können Sie immer dann, wenn 1 Ihrer Bank -Pokmon beschädigt ist, 10 dieses Schadens an Brocks Rhydon. <em> (Wenn mehr als 1 Ihres Bank -Pokmon gleichzeitig beschädigt wird, können Sie diese Kraft für jeden von ihnen einmal anwenden.) </em>",
            es: "Mientras el Rhydon de Brock esté en banca, cada vez que 1 de su banca Pokmon está dañado, puede hacer 10 de ese daño al Rhydon de Brock. <em> (si más de 1 de su pokmon de banca está dañado al mismo tiempo, puede usar este poder una vez para cada uno de ellos). </em>",
            it: "Finché il Rhydon di Brock viene in panchina, ogni volta che 1 dei tuoi Pokmon in panchina viene danneggiato, puoi invece fare 10 di quel danno al Rhydon di Brock. <em> (Se più di 1 del tuo Pokmon in panchina è danneggiato allo stesso tempo, puoi usare questa potenza una volta per ciascuno di essi.) </em>",
            pt: "Enquanto o Rhydon de Brock estiver em banco, sempre que 1 do seu Pokmon com bancada estiver danificado, você pode causar 10 desse dano ao Rhydon de Brock. <em> (se mais de 1 de seu Pokmon com bancada estiver danificado ao mesmo tempo, você poderá usar esse poder uma vez para cada um deles.) </em>",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Lariat",
            ja: "ラリアット",
            fr: "Lasso",
            de: "Lasso",
            es: "Lazo",
            it: "Lariat",
            pt: "Lariat",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 70,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
