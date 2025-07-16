import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Machamp",
         ja: "マチャンプ",
         fr: "Machamp",
         de: "Machamp",
         es: "Machamp",
         it: "Machamp",
         pt: "Machamp",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 100,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Strikes Back",
            ja: "ストライクバック",
            fr: "Frappe en arrière",
            de: "Schlägt zurück",
            es: "Retroceso",
            it: "Colpisce indietro",
            pt: "Volta de volta",
          },
          effect: {
            en: "Whenever your opponent's attack damages Machamp <em>(even if Machamp is Knocked Out)</em>, this power does 10 damage to the attacking Pokmon. <em>(Don't apply Weakness and Resistance.)</em> This power can't be used if Machamp is already affected by a Special Condition when your opponent attacks.",
            ja: "対戦相手の攻撃がMachamp <em>に損害を与えるたびに（Machampがノックアウトされたとしても）</em> </em>、このパワーは攻撃ポクモンに10ダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em>相手が攻撃するときにMachampが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Chaque fois que l'attaque de votre adversaire endommage Machamp <em> (même si Machamp est éliminé) </em>, cette puissance fait 10 dégâts au Pokmon attaquant. <em> (N'appliquez pas la faiblesse et la résistance.) </em> Cette puissance ne peut pas être utilisée si Machamp est déjà affecté par une condition spéciale lorsque votre adversaire attaque.",
            de: "Immer wenn der Angriff Ihres Gegners Machamp <em> schädigt (auch wenn Machamp ausgeschaltet wird) </em>, schädigt diese Kraft 10 dem angreifenden Pokmon. <em> (Wenden Sie keine Schwäche und Widerstand an.) </em> kann diese Leistung nicht angewendet werden, wenn Machamp bereits von einem besonderen Zustand betroffen ist, wenn Ihr Gegner angreift.",
            es: "Cada vez que el ataque de tu oponente daña a Machamp <em> (incluso si Machamp es noqueado) </em>, este poder hace 10 daños al Pokmon atacante. <em> (no aplique debilidad y resistencia.) </em> Este poder no se puede usar si Machamp ya está afectado por una condición especial cuando su oponente ataca.",
            it: "Ogni volta che l'attacco del tuo avversario danneggia Machamp <em> (anche se Machamp viene eliminato) </em>, questa potenza fa 10 danni ai Pokmon attaccanti. <em> (Non applicare debolezza e resistenza.) </em> Questa potenza non può essere utilizzata se Machamp è già influenzato da una condizione speciale quando il tuo avversario attacca.",
            pt: "Sempre que o ataque do seu oponente danifica Machamp <em> (mesmo que o Machamp seja nocauteado) </em>, esse poder causa 10 danos ao Pokmon atacante. <em> (não aplique fraqueza e resistência.) </em> Essa potência não pode ser usada se o Machamp já for afetado por uma condição especial quando o seu oponente atingir.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
          name: {
            en: "Seismic Toss",
            ja: "地震のトス",
            fr: "Lancer sismique",
            de: "Seismischer Wurf",
            es: "Lanzamiento sísmico",
            it: "Lancio sismico",
            pt: "Lançamento sísmico",
          },
          damage: 60,
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
