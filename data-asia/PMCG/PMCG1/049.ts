import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Alakazam",
         ja: "アラカザム",
         fr: "Alakazam",
         de: "Alakazam",
         es: "Alakazam",
         it: "Alakazam",
         pt: "Alakazam",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [65],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Damage Swap",
            ja: "ダメージスワップ",
            fr: "Échange de dégâts",
            de: "Schadenstausch",
            es: "Intercambio de daños",
            it: "Swap di danno",
            pt: "Troca de danos",
          },
          effect: {
            en: "As often as you like during your turn <em>(before your attack)</em>, you may move 1 damage counter from 1 of your Pokmon to another as long as you don't Knock Out that Pokmon. This power can't be used if Alakazam is affected by a Special Condition.",
            ja: "ターン<em>（攻撃の前）</em>中に好きなように、ポクモンをノックアウトしない限り、1ダメージカウンター1から別のダメージカウンターを移動できます。アラカザムが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Aussi souvent que vous le souhaitez à votre tour <em> (avant votre attaque) </em>, vous pouvez déplacer 1 compteur de dégâts de 1 de votre Pokmon à un autre tant que vous ne consommez pas ce pokmon. Ce pouvoir ne peut pas être utilisé si Alakazam est affecté par une condition spéciale.",
            de: "So oft Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> mögen, können Sie 1 Schadenschalter von 1 Ihres Pokmon zu einem anderen verschieben, solange Sie diesen Pokmon nicht ausschalten. Diese Kraft kann nicht angewendet werden, wenn Alakazam von einem besonderen Zustand betroffen ist.",
            es: "Tan a menudo como desee durante su turno <em> (antes de su ataque) </em>, puede mover 1 contador de daño de 1 de su Pokmon a otro siempre que no elimine a ese Pokmon. Este poder no se puede usar si Alakazam se ve afectado por una condición especial.",
            it: "Tutte le volte che vuoi durante il tuo turno <em> (prima del tuo attacco) </em>, puoi spostare 1 contatore di danni da 1 del tuo Pokmon a un altro fintanto che non metti fuori quel pokmon. Questo potere non può essere usato se Alakazam è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno <em> (antes do seu ataque) </em>, você pode mover 1 contador de danos de 1 do seu Pokmon para outro, desde que não nocauteie esse Pokmon. Esse poder não pode ser usado se Alakazam for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
